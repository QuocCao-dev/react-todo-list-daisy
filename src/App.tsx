import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { TTodo } from "./types/todo";
import useTodoList from "./hooks/use-todos";

/**
 *
 * useState
 * useEffect
 * useRef
 *
 * useContext
 * useCallback
 * useMemo
 * useReducer
 *
 * Custom Hook :
 *
 */

function App() {
  const [name, setName] = useState("");
  const { addTodo, todoList, deleteTodo } = useTodoList();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(name);
    setName("");
  };

  const handleDelete = (id: TTodo["id"]) => {
    deleteTodo(id);
  };

  return (
    <div>
      <div className="w-[600px] mx-auto bg-gray-200 p-16 flex flex-col justify-center items-center space-y-8">
        {/* start of form  */}
        <div>
          <form className="w-[500px] bg-white p-8" onSubmit={handleSubmit}>
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text">Name: </span>
              </label>
              <input
                type="text"
                placeholder="Add a new todo"
                className="w-full input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <button className="mt-2 btn btn-primary">Submit</button>
          </form>
        </div>
        {/* end of form  */}

        {/* start: todo list */}
        <div className="w-full space-y-4 bg-white">
          {todoList.map((todo) => (
            <div className="flex w-full px-8 py-4 bg-red-50" key={todo.id}>
              <div className="flex-1">{todo.name}</div>
              <div className="w-[160px] flex items-center justify-between">
                <button
                  className="btn btn-sm btn-outline btn-secondary"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
                <button className="btn btn-sm btn-outline btn-accent">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* end: todo list */}
      </div>
    </div>
  );
}

export default App;
