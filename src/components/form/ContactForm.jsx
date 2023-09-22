import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axiosClient from '../config/axiosClient';
import styled from 'styled-components';
import { device } from '../../breakpoint';

const ContactSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required'),
});

export const ContactForm = () => (
  <div>
    <Formik
      initialValues={{
        first_name: '',
        email: '',
        message: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={async (values, action) => {
        // same shape as initial values
        console.log(values);
        const response = await axiosClient.post('/hackathon/contact-form', values);
        console.log(response);
        action.resetForm();
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <FormCont>
          <h2>Questions or need assistance?<br/>Let us know  about it!</h2>
          <p>Email us below to any question related to our event</p>
          <div className='form-input'>
            <div className="input-group">
              <Field name="first_name" placeholder='First Name' />
              {errors.first_name && touched.first_name ? (
                <div className='errors'>{errors.first_name}</div>
              ) : null}
            </div>
            <div className="input-group">
              <Field name="email" placeholder='Mail' type="email" />
              {errors.email && touched.email ? <div className='errors'>{errors.email}</div> : null}
            </div>
            <div className="input-group">
              <Field name="message" placeholder='Message' as='textarea' cols="30" rows="5"/>
              {errors.message && touched.message ? <div className='errors'>{errors.message}</div> : null}
            </div>
          </div>
          <button className={`${isSubmitting?'disabled': ''}`} type="submit">Submit</button>
        </FormCont>
      )}
    </Formik>
  </div>
);

const FormCont = styled(Form)`
  padding: 3% 4%;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  .disabled {
    cursor: not-allowed;
  }
  input, textarea {
      margin-top: 15px;
      padding: 10px 20px;
      border-radius: 4px;
      border: 1px solid #FFF;
      color: white;
      background: rgba(255, 255, 255, 0.03);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .form-input {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .errors {
      color: red;
      font-size: 0.8rem;
  }
  button {
    width: fit-content;
    margin: 0 auto;
    margin-top: 10px;
    padding: 15px 60px;
  }
  @media screen and (${device}) {

  }
`