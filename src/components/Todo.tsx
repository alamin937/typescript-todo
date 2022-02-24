import React from "react";
import { TodoType } from "../App";

type Props = {
  key: number;
  todo: TodoType;
  dispatch: Function;
};

const Todo: React.FC<Props> = ({ todo, dispatch }) => {
  const deleteTodo = () => {
    dispatch({
      type: "DELETE",
      id: todo.id,
    });
  };
  return (
    <div style={{textAlign:'center'}}>
        <tbody>
      <tr className="border ">
        <td className="border">{todo.todo}</td>
        <td className="border py-3">
          <button
            onClick={deleteTodo}
            className="bg-red-500 px-2 py-1 text-white rounded"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
    </div>
  );
};

export default Todo;