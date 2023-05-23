"use client";

import React, { useState,useEffect } from "react";
import InputNovaTarefa from "./inputNovaTarefa";
import Tarefas from "./Tarefas";
import TarefasOpen from "./TarefasOpen";

import ControleTarefas from "../../controle/ControleTarefas";

const MainComponent = () => {

    /*
    const [listaTarefas, setListaTarefas] = useState([{'id':1, 'relevancia':'importante', 'title':"Tarefas da Estacio!"},
    {'id':2, 'relevancia':'urgente', 'title':'Tarefas do dia dia!'}])
    */

     
    const [listaTarefas, setListaTarefas] = useState([])
    const [auteracaoTarefas, setAuteracaoTarefas] = useState(false)
    const controle = new ControleTarefas() 
    
    useEffect(()=>{
        setListaTarefas(controle.obterTarefas())
    },auteracaoTarefas)

    // Fechar a edição (não está salvando alterações ainda)
    const salvar = (id, relevancia, title) => {
       const tarefasEditadas=controle.editar(id, relevancia, title)
        setListaTarefas(tarefasEditadas)
        setItemContent('')
    }
    
    const incluirTarefa=(inputValue)=>{
        console.log('incluir tarefa',inputValue)
        controle.incluir(inputValue)
        setAuteracaoTarefas(!auteracaoTarefas)
    }

    return (
            <div className='main_todo w-9/12 mt-5'>
                <InputNovaTarefa incluirTarefa={incluirTarefa}/>
                {listaTarefas.map((tarefa)=> (
                    <Tarefas 
                    id={tarefa.id} 
                    relevancia={tarefa.relevancia} 
                    title={tarefa.title}
                    />    
                ))}
            </div>
    )
}

export default MainComponent


