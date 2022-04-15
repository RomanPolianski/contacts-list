import s from './Table.module.css';

const Table = ({ data, column }) => {
  return (
    <table>
      <thead>
        <tr>
          {column.map((item, index) => {
            return <TableHeadItem item={item} key={index} />;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return <TableRow item={item} column={column} key={index} />;
        })}
      </tbody>
    </table>
  );
};

const TableHeadItem = ({ item }) => {
  return <th>{item.heading}</th>;
};

const TableRow = ({ item, column }) => {
  return (
    <tr>
      {column.map((columnItem, index) => {
        return <td>{item[`${columnItem.value}`]}</td>;
      })}
    </tr>
  );
};

export default Table;
