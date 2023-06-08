import React, { useState } from "react";
import { AiOutlineCheckCircle,AiOutlineCloseCircle } from "react-icons/ai";

import ControleTarefas from "../controle/ControleTarefas";
import { ITask } from "../modelo/iTarefa";

const TarefasOpen = (props) => {
  const [formData, setFormData] = useState({ title: props.props.title, relevance: props.props.relevance });

  const controle= new ControleTarefas() 

  console.log('props ==>> ',props);  
  console.log('props.title ==>> ',props.props.title);

  const ConfirmClick = () => {
    const { title, relevance } = formData;
    const tarefa  = {
      id:props.props.id,
      title:title,
      relevance:relevance
    }
    console.log('confirmação da edição ==>> ',tarefa)
    controle.editar(tarefa)
    window.location.reload();//--->>> Dá um "F5" na página.
  };

  const CancelClick = () =>{
    window.location.reload();//--->>> Dá um "F5" na página.
  }

  return (
    <div className="flex justify-center w-full mb-2 mt-5 border border-yellow-500">
      <section className="w-full">
        <div className="">
          <span className="block font-medium text-white mt-2 ml-3">Editar Tarefa</span>
          <textarea
            className="m-5 w-3/4 bg-gray-100 text-gray-800 py-2 px-3 rounded-md resize-none"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          ></textarea>
        </div>
        <div className="mt-2">
          <span className="block font-medium text-white ml-3">Editar Prioridade</span>
          <select
            id="priority"
            className="w-1/4 bg-white text-gray-800 py-2 px-3 m-5 rounded-md"
            value={formData.relevance}
            onChange={(e) => setFormData({ ...formData, relevance: e.target.value })}
          >
            <option value="none">Nenhuma</option>
            <option value="high">Alta</option>
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
          </select>
        </div>
        <div className="flex justify-left">
          <AiOutlineCheckCircle onClick={ConfirmClick} className="m-5 text-green-500 text-4xl" />
          <AiOutlineCloseCircle onClick={CancelClick} className="m-5 text-red-500 text-4xl" />
        </div>
      </section>
    </div>
  );
};

export default TarefasOpen;
