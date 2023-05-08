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
  }, [])

  

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask("");
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask({ id}));
  };

  const handleCompletedTask = (id) => {
    dispatch(completedTask({ id }));
  };

  return (
    <>
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
        {store.getState().map((task, index) => (
          <div key={index}>
            <h3>
              {task.id} - {task.task}
              <button onClick={() => handleRemoveTask(task.id)}>
                Remover
              </button>
              <button onClick={() => handleCompletedTask(task.id)}>
                Completar
              </button>
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskForm;
