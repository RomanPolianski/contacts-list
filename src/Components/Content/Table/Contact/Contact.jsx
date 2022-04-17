/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setContactId } from '../../../../store/contactsSlice';
import s from '../../Content.module.css';
import Task from '../Task/Task';

const Contact = ({
  contactId,
  name,
  last_name,
  company,
  phone,
  email,
  adress,
  operator,
  os,
  tasks,
}) => {
  const task = tasks.map((t) => (
    <Task key={t.task_id} taskName={t.task_name} taskStatus={t.task_status} />
  ));

  const dispatch = useDispatch();
  return (
    <tr>
      <th>{name}</th>
      <th>{last_name}</th>
      <th>{company}</th>
      <th>{phone}</th>
      <th>{email}</th>
      <th>{adress}</th>
      <th>{operator}</th>
      <th>{os}</th>
      <th>{task}</th>
      <th>
        <NavLink
          to="/edit"
          className={s.backButton}
          onClick={() => dispatch(setContactId(contactId))}
        >
          Edit
        </NavLink>
      </th>
    </tr>
  );
};

export default Contact;
