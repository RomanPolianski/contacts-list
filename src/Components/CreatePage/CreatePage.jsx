import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import InputField from '../common/InputField/InputField';
import s from './CreatePage.module.css';
import Select from '../common/SelectField/Select';
import React, { useState } from 'react';

const CreatePage = () => {
  const digitsOnly = (value) => /^\d+$/.test(value);
  const validate = Yup.object({
    name: Yup.string()
      .required('Name Required')
      .min(4, 'Name needs to be at least 4 characters')
      .max(25, 'Name is too long'),
    lastName: Yup.string()
      .required('LastName Required')
      .min(2, 'Last Name needs to be at least 2 characters')
      .max(25, 'Last Name is too long'),
    company: Yup.string()
      .required('Company Name Required')
      .min(2, 'Company Name needs to be at least 2 characters')
      .max(25, 'Compay Name is too long'),
    phone: Yup.string()
      .required('Phone Required')
      .test('Digits only', 'The field should have digits only', digitsOnly)
      .max(9, 'Number is too long'),
    email: Yup.string().email('Must be a valid email').max(25).required('Email is required'),
    adress: Yup.string().required('Adress Required'),
    operator: Yup.string().required('Operator Required'),
    os: Yup.string().required('OS Required'),
  });

  const dropDownOptions = [
    { key: 'Choose operator', value: '' },
    { key: 'MTS', value: 'option1' },
    { key: 'A1', value: 'option2' },
    { key: 'Life :)', value: 'option3' },
  ];
  const dropDownOptions2 = [
    { key: 'Choose OS', value: '' },
    { key: 'IOS', value: 'option1' },
    { key: 'Android', value: 'option2' },
  ];

  const [selected, setSelected] = useState('');

  return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
        company: '',
        phone: '',
        email: '',
        adress: '',
        operator: '',
      }}
      validationSchema={validate}
      //   onSubmit={(values) => {
      //     dispatch(sendSignUpData(values));
      //   }}
    >
      {(formik) => (
        <div className={s.container}>
          <p className={s.h1}>Create Contact.</p>
          <Form className={s.form}>
            <InputField label="Name" name="name" type="text" />
            <InputField label="Last Name" name="lastName" type="text" />
            <InputField label="Company" name="company" type="text" />
            <InputField label="Phone" name="phone" type="text" />
            <InputField label="Email" name="email" type="email" />
            <InputField label="Adress" name="adress" type="text" />
            <Select
              control="select"
              label="Select operator"
              name="operator"
              options={dropDownOptions}
            />
            <div className={s.radioButtons}>
              <div className={s.radioHeader}>Choose OS</div> Popular
              <input
                id="popular"
                value="popular"
                name="platform"
                type="radio"
                onChange={(e) => setSelected(e.target.value)}
              />
              Other
              <input
                id="other"
                value="other"
                name="platform"
                type="radio"
                onChange={(e) => setSelected(e.target.value)}
              />
            </div>
            <div>
              {selected === 'popular' && (
                <div>
                  <Select control="select" label="Select OS" name="os" options={dropDownOptions2} />
                </div>
              )}
              {selected === 'other' && (
                <div>
                  <InputField label="Type in OS" name="os" type="text" placeholder="" />
                </div>
              )}
            </div>
            <button type="submit" disabled={!formik.isValid} className={s.submitButton}>
              Create
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default CreatePage;
