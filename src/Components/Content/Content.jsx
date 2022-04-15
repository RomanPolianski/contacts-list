import Table from './Table/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../store/contactsSlice';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Content.module.css';

const Content = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const contacts = useSelector((state) => state.contacts.contacts);
  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Last Name', value: 'last_name' },
    { heading: 'Company', value: 'company' },
    { heading: 'Phone', value: 'phone' },
    { heading: 'Email', value: 'email' },
    { heading: 'Adress', value: 'adress' },
    { heading: 'Operator', value: 'operator' },
  ];

  return (
    <div className={s.wrapper}>
      <h1>Contacts.</h1>
      <Table data={contacts} column={column} />
      <NavLink to="/create" className={s.button}>New Contact</NavLink>
    </div>
  );
};

export default Content;
