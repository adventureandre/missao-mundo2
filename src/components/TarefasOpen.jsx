import React from "react";
import {FcMenu} from "react-icons/fc";
import {GiArrowDunk, GiReturnArrow} from "react-icons/gi";

const TarefasOpen = (props)=>{
    return(
        <div className={`relevancia-${props.relevancia} row w-100 mb-2`} key={props.id}>
            <FcMenu className='col-sm-1 mt-2 icon '/>
            <div className='custom-checkbok col-sm-1 '>
                <input id={`realizardo-${props.id}`} className=' ckeck' type='checkbox'/>
                <label htmlFor={`realizardo-${props.id}`}></label>
            </div>
            <input className='col-sm-9 ' type='text' value={props.title} placeholder="Nova tarefa..."/>
            <div className='col-sm-1 d-flex justify-content-end '>
                <GiReturnArrow className='mt-2 icon '/>
            </div>
            <div className='main_desc'>
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
        </div>
    );
}

export default TarefasOpen;