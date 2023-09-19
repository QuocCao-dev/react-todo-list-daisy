import { FormEvent, useState } from "react";
import "./App.css";
import { TTodo } from "./types/todo";

function App() {
  const [name, setName] = useState("");
  const [todoList, setTodoList] = useState<TTodo[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo: TTodo = {
      name,
      finished: false,
      createdAt: new Date(),
    };
    setTodoList([...todoList, newTodo]);
  };

  console.log(todoList);

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
        <div className="w-full bg-white">
          {todoList.map((todo) => (
            <div className="flex w-full px-8 py-4 bg-red-50">
              <div className="flex-1">{todo.name}</div>
              <div className="w-[160px] flex items-center justify-between">
                <button className="btn btn-sm btn-outline btn-secondary">
                  delete
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
