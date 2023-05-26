import ControleTarefasDb from "./ControleDbTarefas";

import { ITask } from "@/db/Tarefas";
 
 

export default class ControlDb  {
    
    control: object;

    constructor(){
        this.control= new ControleTarefasDb()
    }

    public async obterTarefas() {
        const response= await this.control.obterTarefas()
        const data =response.data ; 
        console.log("dentro de obterTarefas data",data)
        return data;
      }

      public incluir(tarefa: ITask){
        this.control.incluir(tarefa)
      }
    
      public editar(tarefa: ITask){
        this.control.editar(tarefa)
      }   

  public excluir(id:number){
    const _id =id.toString
    this.control.excluir(_id)
  }    
}
