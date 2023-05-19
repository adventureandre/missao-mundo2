"use client";

import React, { useState } from "react";
import InputNovaTarefa from "./inputNovaTarefa";
import Tarefas from "./Tarefas";

const MainComponent = () => {

    const [listaTarefas, setListaTarefas] = useState([{'id':1, 'relevancia':'importante', 'title':"Tarefas da Estacio!"},
    {'id':2, 'relevancia':'urgente', 'title':'Tarefas do dia dia!'}])

    return (
            <div className='main_todo w-9/12 mt-5'>
                <InputNovaTarefa/>
                {listaTarefas.map((tarefa)=> (
                    <Tarefas id={tarefa.id} relevancia={tarefa.relevancia} title={tarefa.title}/>
                ))}
                {/*<TarefasOpen id='3' relevancia='normal' title='Tarefas Aberta'/>*/}
            </div>
    )
}

export default MainComponent


