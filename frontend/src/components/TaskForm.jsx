import React, { useEffect, useState } from "react";
import store from "../store/configureStore";
import { useDispatch } from "react-redux";
import { addTask, removeTask, completedTask } from "../store/task/tasks";

const TaskForm = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState("");

  useEffect(() => {
    store.subscribe(() => {
      console.log(store.getState());
    });
  }, []);

  function handleAddTask(event) {
    event.preventDefault();
    dispatch(addTask(task));
    setTask("");
  }

  function handleRemoveTask(id) {
    dispatch(removeTask({ id}));
  };

  function handleCompletedTask(id) {
    dispatch(completedTask({ id }));
  };

  return (
    <div>
      <div className="container">
        <h1>Teste Redux - Tarefas</h1>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button type="submit">Adicionar</button>
        </form>
          {store.getState().tasks.map((task) => (
            <div key={task.id}>
              <h2>{task.task}</h2>
              <button onClick={() => handleRemoveTask(task.id)}>Remover</button>
              <button onClick={() => handleCompletedTask(task.id)}>
                Concluir
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TaskForm;
