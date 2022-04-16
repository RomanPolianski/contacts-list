import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Table.module.css';
import Task from './Task/Task';
import Contact from './Contact/Contact';
import { fetchContacts } from '../../../store/contactsSlice';

const Table = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const contacts = useSelector((state) => state.contacts.contacts);
  const c = contacts.map((p) => (
    <Contact
      key={p.contact_id}
      contactId={p.contact_id}
      name={p.name}
      last_name={p.last_name}
      company={p.company}
      phone={p.phone}
      email={p.email}
      adress={p.adress}
      operator={p.operator}
      os={p.os}
      tasks={p.tasks}
    />
  ));

  return (
    <table className={s.contentTable}>
      <thead >
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Company</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Adress</th>
          <th>Operator</th>
          <th>Os</th>
          <th>Tasks</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>{c}</tbody>
    </table>
  );
};

export default Table;
