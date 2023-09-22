import React, {useEffect, useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axiosClient from '../config/axiosClient';
import styled from 'styled-components';
import { device } from '../../breakpoint';
import Popup from '../Popup';

const RegisterSchema = Yup.object().shape({
  team_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone_number: Yup.string()
    .min(2, "Phone number too short")
    .max(50, "Phone number too long")
    .matches(
      /^(?:\+?\d{1,4}[-.\s]?)?(?:\(\d{1,4}\)[-.\s]?)?\d{1,13}$/g,
      "Invalid phone number"
    )
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  project_topic: Yup.string().required('Required'),
  category: Yup.number().required('Required').oneOf([1,2,3], "Select a valid category"),
  group_size: Yup.number().required('Required')
  .oneOf([5,6,7,8,9,10], "Select a valid group size"),
  privacy_poclicy_accepted: Yup.boolean()
  .oneOf([true], "Terms and condition is Required!")
  .required("Terms and condition is Required!"),

});

export const RegisterForm = () => {
    const [showPopup, setShowPopup] = useState(false)
    const handleBack = () => {
        setShowPopup(false)
    }
  const [category, setCategory] = useState('');
  const fetchCategory = async () => {
    const response = await axiosClient.get('/hackathon/categories-list');
    setCategory(response);
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  return (
  <div>
    <Formik
      initialValues={{
        team_name: '',
        phone_number: '',
        email: '',
        project_topic: '',
        category: '',
        group_size: '',
        privacy_poclicy_accepted: false,
      }}
      validationSchema={RegisterSchema}
      onSubmit={async (values, action) => {
        // same shape as initial values
        console.log(values);  
        const response = await axiosClient.post('/hackathon/registration', values);
        console.log(response);
        if (response) {
          action.resetForm();
          setShowPopup(true)
        }
      }}
    >
      {({ errors, touched, setFieldValue, isSubmitting}) => (
        <FormCont>
          <h1>Register</h1>
          <p>Be part of this movement</p>
          <h2>CREATE YOUR ACCOUNT</h2>
          <div className='form-input'>
            <div className='input-group'>
              <label htmlFor="team_name">Team Name</label>
              <Field name="team_name" />
              {errors.team_name && touched.team_name ? (
                <div className='error'>{errors.team_name}</div>
              ) : null}
            </div>
            <div className='input-group'>
              <label htmlFor="phone_number">Phone</label>
              <Field name="phone_number" />
              {errors.phone_number && touched.phone_number ? (<div className='error'>{errors.phone_number}</div>) : null}
            </div>
            <div className='input-group'>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
            </div>
            <div className='input-group'>
              <label htmlFor="project_topic">Project</label>
              <Field name="project_topic" />
              {errors.project_topic && touched.project_topic ? <div className='error'>{errors.project_topic}</div> : null}
            </div>
            <div className='input-group'>
              <label htmlFor="category">Category</label>
              <Field 
              onChange={(e) => {
                setFieldValue(
                  "category",
                  parseInt(e.target.value)
                );
              }}
              name="category" as='select'>
                <option value={0}>Select Category</option>
                {category? category?.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              )): <option value={0}>Loading...</option>}
              </Field>
              {errors.category && touched.category ? <div className='error'>{errors.category}</div> : null}
            </div>
            <div className='input-group'>
              <label htmlFor="group_size">Group Size</label>
              <Field
              onChange={(e) => {
                setFieldValue(
                  "group_size",
                  parseInt(e.target.value)
                );
              }}
              name="group_size" as='select'>
              <option value={0}>Select Group</option>
              <option value="5" >5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              </Field>
              {errors.group_size && touched.group_size ? <div className='error'>{errors.group_size}</div> : null}
              
            </div>
          </div>
          <p className='info'>Please review your registration details before submitting</p>
          <div className='terms'>
            <label htmlFor="terms" className='checkbox-label'>
              <Field type="checkbox" className='checkbox' name="privacy_poclicy_accepted" id="privacy_poclicy_accepted" />
            </label>
            <span>I agreed with the event terms and conditions  and privacy policy</span>
            {errors.privacy_poclicy_accepted && touched.privacy_poclicy_accepted ? <div className='error'>{errors.privacy_poclicy_accepted}</div> : null}
          </div>
          <button className={`${isSubmitting?'disabled': ''}`} type="submit">Register Now</button>
          {showPopup && <Popup handleBack={handleBack} />}
        </FormCont>
      )}
    </Formik>
  </div>
  );
};

const FormCont = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 1% 4%;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 100;
  .disabled {
    cursor: not-allowed;
  }
  .input-group {
      display: flex;
      flex-direction: column;
  }
  .form-input {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
  }
  & > button {
      margin-top: 10px;
      display: inline;
      flex: 0;
  }
  h1 {
    color: #D434FE;;
    font-size: 2rem;
  }
  & > h2 {
    color: white;
  }
  .input-group {
  input, textarea, select {
      margin-top: 10px;
      padding: 10px 20px;
      border-radius: 4px;
      border: 1px solid #FFF;
      color: white;
      background: rgba(255, 255, 255, 0.03);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  }
  
  option {
      background: #140D27;
  }
  .info, .terms {
      grid-column: 1/3;
      flex-direction: row;
      justify-content: center;
  }
  .info, .error {
      color: #FF26B9;
  }
  .error {
      font-size: 0.8rem;
  }
  button {
    margin-top: 10px;
    padding: 15px 60px;
  }
  
  @media screen and (${device.md}) {
    .form-input {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .input-group {
      grid-column: 1/3;
    }
    .input-group:nth-child(5) {
      grid-column: 1/2;
    }
    .input-group:nth-child(6) {
      grid-column: 2/3;
    }
  }
`