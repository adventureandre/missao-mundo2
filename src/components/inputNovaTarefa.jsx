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
    <div className='row w-100 mb-3'>
      <FaPlus className='col-2 mt-2 icon' onClick={handleIncluirTarefa} />
      <input
        className='col-10'
        type='text'
        placeholder="Nova tarefa..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputNovaTarefa;
