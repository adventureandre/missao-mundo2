"use client";

import React, { useState } from "react";
import InputNovaTarefa from "./inputNovaTarefa";
import Tarefas from "./Tarefas";
import TarefasOpen from "./TarefasOpen";

const MainComponent = () => {

    const [listaTarefas, setListaTarefas] = useState([{'id':1, 'relevancia':'importante', 'title':"Tarefas da Estacio!"},
    {'id':2, 'relevancia':'urgente', 'title':'Tarefas do dia dia!'}])

    const [itemContent, setItemContent] = useState('')

    // Abrir a tarefa para edição
    const editTask = (id, relevancia, title) => {
        if(id){
            setItemContent(<TarefasOpen id={id} relevancia= {relevancia} title={title} salvar={salvar}/>)
        }
    }

    // Fechar a edição (não está salvando alterações ainda)
    const salvar = (id, relevancia, title) => {
        //let tarefaEditada = {'id': id, 'relevancia':relevancia, 'title':title}
        //let novaListaTarefas = listaTarefas.filter((tarefa)=> tarefa.id !== id )
        //novaListaTarefas.push(tarefaEditada)
        //console.log(novaListaTarefas)
        //setListaTarefas(novaListaTarefas)
       //console.log(listaTarefas)
        setItemContent('')
    }

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
                {itemContent}
            </div>
    )
}

export default MainComponent


