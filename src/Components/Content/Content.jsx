import { NavLink } from 'react-router-dom';
import s from './Content.module.css';
import Table from './Table/Table';

const Content = () => {
  return (
    <div>
      <h1>Contacts.</h1>
      <Table />
      <NavLink to="/create" className={s.buttonAdd}>
        Add Contact
      </NavLink>
    </div>
  );
};

export default Content;
