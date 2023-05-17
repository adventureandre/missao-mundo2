import React from "react";
import InputNovaTarefa from "./inputNovaTarefa";
import Tarefas from "./Tarefas";
import TarefasOpen from "./TarefasOpen";

const MainComponent = () => {
    return (
            <div className='main_todo w-9/12 mt-5'>
                <InputNovaTarefa/>
                <Tarefas id='1' relevancia='importante' title="Tarefas da Estacio!"/>
                <Tarefas id='2' relevancia='urgente' title='Tarefas do dia dia!'/>
                {/*<TarefasOpen id='3' relevancia='normal' title='Tarefas Aberta'/>*/}
            </div>
    )
}

export default MainComponent


