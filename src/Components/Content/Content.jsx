import { NavLink } from 'react-router-dom';
import s from './Content.module.css';
import Table from './Table/Table';

const Content = () => {
  return (
    <div>
      <Table />
      <NavLink to="/create" className={s.buttonAdd}>Add Contact</NavLink>
    </div>
  );
};

export default Content;
