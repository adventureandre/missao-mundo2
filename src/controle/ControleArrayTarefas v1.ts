import { Tarefa } from "../modelo/Tarefa";
import { ITask } from "@/db/Tarefas";
   

 

interface IControleTarefas {
  obterTarefas(): Tarefa[];
  incluir(tarefa: ITask): void;
  editar(tarefa: ITask): void;
  excluir(id:number):void
}

 

export default class ControleTarefasArray implements IControleTarefas {
 
  private Tarefas:Tarefa[]  =[
    {id:1, relevance:'importante', title:"Tarefas da Estacio!",completed:true},
    {id:2, relevance:'urgente', title:'Tarefas do dia dia!',completed:true},
    {id:3, relevance:'urgente', title:'Concluir a missão M2!',completed:false},
  ]
   

 obterMaiorId()  {
        let maiorId = 0;
        for (let i = 0; i < this.Tarefas.length; i++) {
          const id =  this.Tarefas[i].id ;
          if (id > maiorId) {
            maiorId = id;
          }
        }
        return maiorId ;
   };
 
  public obterTarefas():Tarefa[]   {
      return this.Tarefas;
     
  }
   
  public incluir(novaTarefa:Tarefa):void {
    console.log('novaTarefa ..',novaTarefa)
    this.Tarefas.push(novaTarefa)  
    console.log(this.Tarefas,novaTarefa)   
  }
 

  public editar(tarefa:Tarefa )  {
    let tarefaEditada:Tarefa = {
      id: tarefa.id, 
      relevance:tarefa.relevance, 
      title:tarefa.title,
      completed:tarefa.completed}

    const novaListaTarefas = this.Tarefas.filter((tarefa)=> tarefa.id !== tarefaEditada.id )
    novaListaTarefas.push(tarefaEditada)
    return novaListaTarefas 
  }

  public excluir(id:number ): void {
    this.Tarefas=this.Tarefas.filter((tarefa)=> tarefa.id !== id )
    console.log('tarefa excluida no array',this.Tarefas)
  }
}
 
