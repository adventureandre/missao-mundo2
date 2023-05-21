import React from "react";

const TarefasOpen = (props) => {
    return (
        <div className='main_desc flex justify-center w-full mb-2'>
            <section className='desc_tarefas w-100'>
                <div className='main_notas'>
                    <span className='d-block'>Notas</span>
                    <textarea></textarea>
                </div>
                <div className='main_prioridade'>
                    <span className='d-block'>Prioridade</span>
                    <select id="priority">
                        <option value="none" selected>Nenhuma</option>
                        <option value="high">Alta</option>
                        <option value="low">Baixa</option>
                        <option value="medium">Média</option>
                    </select>
                </div>
            </section>
        </div>
    );
}

export default TarefasOpen;