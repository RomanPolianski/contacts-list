/* eslint-disable prettier/prettier */
import * as Yup from 'yup';

const digitsOnly = (value) => /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(value);
export const scheme = Yup.object({
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
    .max(14, 'Number is too long'),
  email: Yup.string().email('Must be a valid email').max(25).required('Email is required'),
  adress: Yup.string().required('Adress Required'),
  operator: Yup.string().required('Operator Required'),
  os: Yup.string().required('OS Required'),
});
