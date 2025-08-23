import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  let [todo, setTodo] = useState([
    { task: "sample", id: uuidv4(), isDone: false },
  ]);
  let [newTask, setNewTask] = useState("");
  let [com, setCom] = useState("Not Complete");
  let updateTask = (e) => {
    setNewTask(e.target.value);
  };
  let addTask = () => {
    setTodo([...todo, { task: newTask, id: uuidv4(), isDone: false }]);
    setNewTask("");
  };
  let deleteTask = (id) => {
    setTodo(todo.filter((todo) => todo.id != id));
    console.log(todo);
  };
  let doneTask = (id) => {
    setTodo((prevTask) =>
      prevTask.map((todo) =>
        todo.id === id
          ? { ...todo, isDone: true } // mark as done
          : todo
      )
    );
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col gap-5 mt-5">
        <h1>Todo List In React.Js</h1>
        <div className="flex gap-3">
          <input
            className="outline-none px-3 py-2 rounded-lg bg-black text-white"
            type="text"
            placeholder="enter some thing"
            value={newTask}
            onChange={updateTask}
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white py-2 px-3 rounded-xl hover:shadow-lg"
          >
            Add Task
          </button>
        </div>

        <ul>
          {todo.map((todos) => {
            return (
              <div
                key={todos.id}
                className="flex items-center justify-center gap-2"
              >
                <p className="w-2 h-2 rounded-2xl bg-green-500"></p>

                <li className="p-1">{todos.task}</li>
                <button
                  onClick={() => deleteTask(todos.id)}
                  className="bg-black text-white px-1 py-1 rounded-3xl mb-2"
                >
                  Delete Task
                </button>
                
                <button
                  onClick={() => doneTask(todos.id)}
                  className={`px-3 py-1 rounded-3xl mb-2 text-white ${
                    todos.isDone ? "bg-gray-500" : "bg-green-600"
                  }`}
                >
                  {todos.isDone ? "Completed" : "Not Complete"}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Todo;
