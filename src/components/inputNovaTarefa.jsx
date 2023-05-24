import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const InputNovaTarefa = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleIncluirTarefa = () => {
    props.incluirTarefa(inputValue);
    setInputValue(""); // Limpa o valor do input após a inclusão da tarefa
  };

  return (
    <div className="flex flex-row w-full mb-3">
      
      <input
        className="text-black flex-grow ml-2 px-4 py-2 rounded-md mb-8"
        type="text"
        placeholder="Nova tarefa..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <FaPlus className="w-8 h-8 mt-1 mx-2 cursor-pointer text-white hover:text-emerald-500" onClick={handleIncluirTarefa} />
    </div>
  );
};

export default InputNovaTarefa;
