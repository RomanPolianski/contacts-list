import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import InputField from '../common/InputField/InputField';
import s from './CreatePage.module.css';
import Select from '../common/SelectField/Select';

const CreatePage = () => {
  const validate = Yup.object({
    name: Yup.string().required('Name Required'),
    lastName: Yup.string().required('LastName Required'),
    company: Yup.string().required('Company Required'),
    phone: Yup.string().required('Phone Required'),
    email: Yup.string().required('Email Required'),
    adress: Yup.string().required('Adress Required'),
  });

  const dropDownOptions = [
    { key: 'Choose operator', value: '' },
    { key: 'MTS', value: 'option1' },
    { key: 'A1', value: 'option2' },
    { key: 'Life :)', value: 'option3' },
  ];

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
            <Select control='select' label='Select operator' name='operator' options={dropDownOptions}/>
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
