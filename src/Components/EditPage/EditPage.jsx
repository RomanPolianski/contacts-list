import { Formik, Form, FieldArray } from 'formik';
import InputField from '../common/InputField/InputField';
import s from './EditPage.module.css';
import Select from '../common/SelectField/Select';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessage, sendDeleteContact, sendUpdateContact } from '../../store/contactsSlice';
import { scheme } from '../../validators/scheme';
import { toast } from 'react-toastify';

const EditPage = () => {
  const dropDownOptions = [
    { key: 'Choose operator', value: '' },
    { key: 'MTS', value: 'MTS' },
    { key: 'A1', value: 'A1' },
    { key: 'Life :)', value: 'Life :)' },
  ];
  const dropDownOptions2 = [
    { key: 'Choose OS', value: '' },
    { key: 'IOS', value: 'IOS' },
    { key: 'Android', value: 'Android' },
  ];

  const contact = useSelector((state) =>
    state.contacts.contacts.filter((c) => c.contact_id === state.contacts.contactId)
  );

  const dispatch = useDispatch();
  const [selected, setSelected] = useState('other');
  const message = useSelector((state) => state.contacts.message);
  useEffect(() => () => {
    dispatch(deleteMessage());
  }, []);


  const handleDelete = () => {
    dispatch(sendDeleteContact(contact[0]));
  };

  if (message === 'Contact updated successfully') {
    toast.success('Contact updated successfully!', {
      toastId: 1,
    });
  } else if (message === 'Contact deleted successfully') {
    toast.error('Contact deleted!', {
      toastId: 2,
    });
  }

  return (
    <Formik
      initialValues={{
        id: contact[0].contact_id,
        name: contact[0].name,
        lastName: contact[0].last_name,
        company: contact[0].company,
        phone: contact[0].phone,
        email: contact[0].email,
        adress: contact[0].adress,
        operator: contact[0].operator,
        os: contact[0].os,
        tasksUser: contact[0].tasks.map((t) => ({
          id: t.task_id,
          name: t.task_name,
          status: t.task_status,
        })),
      }}
      validationSchema={scheme}
      onSubmit={(values) => {
        dispatch(sendUpdateContact(values));
      }}
    >
      {(formik) => (
        <div className={s.container}>
          <p className={s.h1}>Edit Contact.</p>
          <Form className={s.form}>
            <InputField label="Name" name="name" type="text" />
            <InputField label="Last Name" name="lastName" type="text" />
            <InputField label="Company" name="company" type="text" />
            <InputField label="Phone" name="phone" type="text" />
            <InputField label="Email" name="email" type="email" />
            <InputField label="Adress" name="adress" type="text" />
            <Select control="select" label="Operator" name="operator" options={dropDownOptions} />
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
                  <InputField
                    label="Type in OS"
                    name="os"
                    type="text"
                    placeholder={contact[0].os}
                  />
                </div>
              )}
            </div>
            <div className={s.radioButtons}>
              <div className={s.radioHeader}>List of Tasks</div>
              <FieldArray name="tasksUser">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { tasksUser } = values;
                  return (
                    <div className={s.tasksInputs}>
                      {tasksUser.map((item, index) => (
                        <div key={index}>
                          <InputField name={`tasksUser[${index}].name`} label="Task name" />
                          <InputField name={`tasksUser[${index}].status`} label="Status" />
                          <div>
                            {index > 0 && (
                              <button
                                type="button"
                                className={s.deleteTaskButton}
                                onClick={() => remove(index)}
                              >
                                {' '}
                                Delete task{' '}
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                      <button type="button" className={s.addTaskButton} onClick={() => push()}>
                        {' '}
                        Add task{' '}
                      </button>
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <button type="submit" disabled={!formik.isValid} className={s.submitButton}>
              Edit
            </button>
            <button type="button" className={s.deleteContactButton} onClick={handleDelete}>
              Delete Contact
            </button>
            <NavLink to="/contacts-list" className={s.backButton}>
              Back To Table
            </NavLink>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default EditPage;
