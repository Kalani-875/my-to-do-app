import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./components/TodoTask";
import { ITask } from "./Interfaces";


const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task};
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };
  

  return (
    <div className="App">
      <h2 className="todoApp">Todo App</h2><hr/>
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Enter task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          
        </div>
        <button onClick={addTask}>Add</button>
      </div><hr/>
      <div className="todoList"><h3>Tasks</h3>
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
        
      </div>
    </div>
  );
};

export default App;