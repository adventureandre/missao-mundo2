import { Tarefa } from "../modelo/Tarefa";
 
const Tarefas  =[
    {id:'1', relevancia:'importante', title:"Tarefas da Estacio!"},
    {id:'2', relevancia:'urgente', title:'Tarefas do dia dia!'},
    {id:'3', relevancia:'urgente', title:'Terminar a minha parte da missão!'},
]

interface propsTarefa{
   id :  string;  
   relevancia : string;
   title : string 
}

export default class ControleTarefas {
   
 
  public obterTarefas()   {
      return Tarefas;
     
  }
   
  public incluir():void {
 
  }
 

  public editar(id:string, relevancia:string, title:string)  {
    let tarefaEditada = {'id': id, 'relevancia':relevancia, 'title':title}
    const novaListaTarefas = Tarefas.filter((tarefa)=> tarefa.id !== id )
    novaListaTarefas.push(tarefaEditada)
    return novaListaTarefas 
  }

  public excluir(): void {
      
  
  }
}
 
