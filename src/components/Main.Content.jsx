"use client";
import React, { useState, useEffect } from "react";
import InputNovaTarefa from "./inputNovaTarefa";
import Tarefas from "./Tarefas";
import TarefasOpen from "./TarefasOpen";

import ControleTarefas from "../controle/ControleTarefas";
import tarefas from "./Tarefas";

const MainComponent = () => {
  const [listaTarefas, setListaTarefas] = useState([]);
  const [alteracaoTarefas, setAlteracaoTarefas] = useState(false);
  const controle = new ControleTarefas();

  // fetchData precisa ficar como assincrona para quando
  // mudar o chaveamento para o mongoBD atravé de
  // setDB.ts e .env.local

  const fetchData = async () => {
    const aData = await controle.obterTarefas();
    console.log("Carregando DB form " + new Date().toLocaleString(), aData);
    setListaTarefas(aData);
  };

  useEffect(() => {
    fetchData();
  }, [alteracaoTarefas]);

  const salvar = (id, relevancia, title, checked) => {
    const tarefa = {
      id: id,
      relevance: relevancia,
      title: title,
      completed: completo,
    };
    const tarefasEditadas = controle.editar(id, relevancia, title, checked);
    setAlteracaoTarefas(!alteracaoTarefas);
  };

  const excluirTarefa = (id) => {
    console.log("excluirTarefa", id);
    controle.excluir(id);
    //fetchData()
    setAlteracaoTarefas(!alteracaoTarefas);
  };

  const incluirTarefa = (inputValue) => {
    const tarefa = {
      relevance: "baixa",
      title: inputValue,
      completed: "false",
    };
    controle.incluir(tarefa);
    setAlteracaoTarefas(!alteracaoTarefas);
  };

  const onToggle = (tarefa) => {
    setListaTarefas(
      listaTarefas.map((obj) =>
        obj.id === tarefa.id ? { ...obj, checked: !tarefa.checked } : obj
      )
    );
  };

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
