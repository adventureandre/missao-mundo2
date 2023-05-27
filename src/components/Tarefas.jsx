import React, {useState} from "react";
import {GoTrashcan} from "react-icons/go";
import {FiEdit} from "react-icons/fi";
import {BsCheckSquare} from "react-icons/bs";
import TarefasOpen from "@/components/TarefasOpen";

const Tarefas = ({tarefa, salvar, excluir, onToggle}) => {
    const [itemContent, setItemContent] = useState(null);

    //OBS olhar se vai precisar dessa State
    // as mudancas de checke ja esta sendo feita direto no iten do objeto
    const [isChecked, setIsChecked] = useState(false);

    const editTask = (id) => {
        if (id) {
            setItemContent(<TarefasOpen/>);
        }
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const relevanciaClasses =
        tarefa.relevancia === "importante"
            ? "border-l-4 border-yellow-400 border-solid rounded-lg"
            : tarefa.relevancia === "urgente"
                ? "border-l-4 border-red-500 border-solid rounded-lg"
                : "";


    return (
        <div
            className={`flex flex-wrap items-center justify-center w-full mb-3 ${relevanciaClasses} ${
                isChecked ? "bg-gray-200" : ""
            }`}
            key={tarefa.id}
        >
            <div className="flex flex-wrap items-center w-full bg-white shadow-md p-2 rounded-md">
                <div
                    className={["w-9/12 bg-white text-gray-700 py-1 px-2 ml-5 rounded-md", tarefa.checked ? 'line-through text-gray-300' : ''].join(' ')}
                    >{tarefa.title}</div>

                <div className="w-1/12 flex justify-end">
                    <div className="flex items-center space-x-2">
                        <GoTrashcan 
                        className="mt-2 text-red-500 text-2xl"
                        onClick={() => excluir(tarefa.id)}
                        />
                        
                        <FiEdit
                            className="mt-2 text-yellow-500 text-2xl"
                            onClick={() => editTask(tarefa.id)}
                        />
                        <BsCheckSquare onClick={() => onToggle(tarefa)} className="mt-2 text-green-500 text-2xl"/>
                    </div>
                </div>
            </div>
            {itemContent}
        </div>
    );
};

export default Tarefas;
