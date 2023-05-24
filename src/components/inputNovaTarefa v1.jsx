import React from "react";
import { FaPlus } from "react-icons/fa";

const InputNovaTarefa = (props) => {
  return (
    <div className="container flex row items-center">
      <input
        className="box-input ml-2 p-2 rounded"
        type="text"
        placeholder="Nova tarefa..."
      />
      <FaPlus
        className="col-2 mt-2 cursor-pointer"
        onClick={props.incluirTarefa}
      />
    </div>
  );
};

export default InputNovaTarefa;
