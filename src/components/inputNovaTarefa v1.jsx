import React from "react";
import {FaPlus} from "react-icons/fa";

const InputNovaTarefa = (props) => {

  return(
      <div className='row w-100 mb-3'>
          <FaPlus className='col-2 mt-2 icon' onClick={props.incluirTarefa}/> 
          <input className='col-10' type='text' placeholder="Nova tarefa..."/>
      </div>
  )
}
export default InputNovaTarefa;
