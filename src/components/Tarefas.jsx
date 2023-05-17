import React from "react";
import {FcMenu} from "react-icons/fc";
import {GoTrashcan} from "react-icons/go";
import {FiEdit} from "react-icons/fi";
import {BsCheckSquare} from "react-icons/bs";

const Tarefas = (props)=>{
    return(
        <div className={`relevancia-${props.relevancia} row flex items-center w-full mb-3`} key={props.id}>
            <FcMenu className="w-1/12 mt-2 icon" />
            <div className="custom-checkbok w-1/12">
                <input id={`realizardo-${props.id}`} className="ckeck" type="checkbox" />
                <label htmlFor={`realizardo-${props.id}`}></label>
            </div>
            <input className="w-9/12" type="text" value={props.title} placeholder="Nova tarefa..." />
            <div className="w-1/12 flex justify-end">
                <GoTrashcan className="mt-2 icon icon-red" />
                <FiEdit className="mt-2 icon icon-yellow" />
                <BsCheckSquare className="mt-2 icon icon-green" />
            </div>
        </div>
    );
}

export default Tarefas;