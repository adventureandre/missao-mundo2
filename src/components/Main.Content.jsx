"use client";
import React, { useState, useEffect } from "react";
import InputNovaTarefa from "./inputNovaTarefa";
import Tarefas from "./Tarefas";
import TarefasOpen from "./TarefasOpen";

import ControleTarefas from "../../controle/ControleTarefas";
import tarefas from "./Tarefas";

const MainComponent = () => {
  const [listaTarefas, setListaTarefas] = useState([]);
  const [alteracaoTarefas, setAlteracaoTarefas] = useState(false);
  const controle = new ControleTarefas();

  useEffect(() => {
    setListaTarefas(controle.obterTarefas());
  }, [alteracaoTarefas]);

  const salvar = (id, relevancia, title, checked) => {
    const tarefasEditadas = controle.editar(id, relevancia, title, checked);
    setListaTarefas(tarefasEditadas);
  };

  const excluirTarefa = (id) => {
    const tarefasAtualizadas = controle.excluir(id);
    setListaTarefas(tarefasAtualizadas);
  };

  const incluirTarefa = (inputValue) => {
    console.log("incluir tarefa", inputValue);
    controle.incluir(inputValue);
    setAlteracaoTarefas(!alteracaoTarefas);
  };

  const onToggle = (tarefa) => {
    setListaTarefas(listaTarefas.map((obj) =>
        obj.id === tarefa.id ? {...obj, checked: !tarefa.checked} : obj))
  }

  return (
    <div className="container bg-gray-700 mx-auto rounded-xl w-9/12 mt-5 px-10 py-10">
      <InputNovaTarefa incluirTarefa={incluirTarefa} />
      {listaTarefas.map((tarefa) => (
        <Tarefas
          key={tarefa.id}
          tarefa={tarefa}
          salvar={salvar}
          excluir={excluirTarefa}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default MainComponent;
