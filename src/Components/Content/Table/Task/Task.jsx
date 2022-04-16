const Task = ({ taskName, taskStatus }) => {
  return (
    <div>
      <div>
        <p>Name: {taskName}</p>
      </div>
      <div>
        <p>Status: {taskStatus}</p>
      </div>
    </div>
  );
};

export default Task;
