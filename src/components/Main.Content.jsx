"use client";

import React, { useState } from "react";
import InputNovaTarefa from "./inputNovaTarefa";
import Tarefas from "./Tarefas";
import TarefasOpen from "./TarefasOpen";

const MainComponent = () => {

    const editTask = (id, relevancia, title) => {
        if(id){
           return <TarefasOpen id={id} relevancia= {relevancia} title={title}/>
        } else {
            return ('teste')
        }
    };

    const [listaTarefas, setListaTarefas] = useState([{'id':1, 'relevancia':'importante', 'title':"Tarefas da Estacio!"},
    {'id':2, 'relevancia':'urgente', 'title':'Tarefas do dia dia!'}])

    return (
            <div className='main_todo w-9/12 mt-5'>
                <InputNovaTarefa/>
                {listaTarefas.map((tarefa)=> (
                    <Tarefas 
                    id={tarefa.id} 
                    relevancia={tarefa.relevancia} 
                    title={tarefa.title} 
                    handleEdit={editTask} 
                    />    
                ))}
                    <div>
                      {/*<TarefasOpen id={editTask.id} relevancia= {editTask} title={editTask()}/>*/}
                      {editTask()}
                    </div>
                 
            </div>
    )
}

export default MainComponent


