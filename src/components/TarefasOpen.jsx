import React from "react";

const TarefasOpen = (props) => {
  return (
    <div className="flex justify-center w-full mb-2">
      <section className="w-full">
        <div className="">
          <span className="block font-medium text-white mt-2 ml-3">Editar Tarefa</span>
          <textarea className="w-full bg-gray-100 text-gray-800 py-2 px-3 rounded-md resize-none"></textarea>
        </div>
        <div className="mt-2">
          <span className="block font-medium text-white ml-3">Editar Prioridade</span>
          <select id="priority" className="w-full bg-white text-gray-800 py-2 px-3 rounded-md">
            <option value="none" selected>Nenhuma</option>
            <option value="high">Alta</option>
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
          </select>
        </div>
      </section>
    </div>
  );
}

export default TarefasOpen;
