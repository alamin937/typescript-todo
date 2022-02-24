import { useReducer, useState } from "react";
import { reducer } from "./reducer";
import Todo from "./components/Todo";
import { Button } from "@mui/material";

export interface TodoType {
  id: number;
  todo: string;
}
// actions
export type ActionType =
  | { type: "ADD"; text: string }
  | { type: "DELETE"; id: number };

function App() {
  const [text, setText] = useState<string>("");

  const [todos, dispatch] = useReducer(reducer, []);

  // todo add button
  const addTodo = () => {
    if (text) {
      dispatch({
        type: "ADD",
        text,
      });
    }

  };
  return (
    <div className="md:w-9/12 w-11/12 mx-auto py-20 App" style={{ textAlign: 'center' }}>
      <h1 className="text-center py-4 text-white font-bold text-3xl tracking-wider italic first-letter:text-pink-500">
        My First Todo
      </h1>


    
      <div className=" py-4 flex justify-center">
        <input style={{padding:'10px', borderRadius:'15px'}}
          className="focus:outline-none px-3 text-black"
          type="text"
          onBlur={(e) => setText(e.target.value)}
        />
        <Button style={{marginLeft:'15px'}} variant='contained'
          onClick={addTodo}
          className="bg-green-500 text-white px-3 py-1 "
        >
          Add
        </Button>
      </div>
      {
        todos?.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))
      }
    </div>
  );
}

export default App;