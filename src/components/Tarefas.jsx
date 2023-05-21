import React, {useState} from "react";
import {FcMenu} from "react-icons/fc";
import {GoTrashcan} from "react-icons/go";
import {FiEdit} from "react-icons/fi";
import {BsCheckSquare} from "react-icons/bs";
import TarefasOpen from "@/components/TarefasOpen";

const Tarefas = (props) => {

    const [itemContent, setItemContent] = useState('')

    // Abrir a tarefa para edição
    const editTask = (id) => {
        if(id){
            setItemContent(<TarefasOpen/>)
        }
    }

    return (
        <div className={`relevancia-${props.relevancia} row flex items-center flex-wrap w-full mb-3`} key={props.id}>
            <div className='flex items-center flex-wrap w-full'>
                <FcMenu className="w-1/12 mt-2 icon"/>
                <div className="custom-checkbok w-1/12">
                    <input id={`realizardo-${props.id}`} className="ckeck" type="checkbox"/>
                    <label htmlFor={`realizardo-${props.id}`}></label>
                </div>
                <input className="w-9/12" type="text" value={props.title} placeholder="Nova tarefa..."/>
                <div className="w-1/12 flex justify-end">
                    <GoTrashcan className="mt-2 icon icon-red"/>
                    <FiEdit
                        className="mt-2 icon icon-yellow"
                        onClick={() => editTask(props.id)}
                    />
                    <BsCheckSquare className="mt-2 icon icon-green"/>
                </div>
            </div>
            {itemContent}
        </div>
    );
}

export default Tarefas;