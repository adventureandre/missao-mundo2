import { Tarefa } from "../modelo/Tarefa";
 
const Tarefas  =[
    {id:1, relevancia:'importante', title:"Tarefas da Estacio!"},
    {id:2, relevancia:'urgente', title:'Tarefas do dia dia!'},
    {id:3, relevancia:'urgente', title:'Terminar a minha parte da missão!'},
]

interface propsTarefa{
   id :  number;  
   relevancia : string;
   title : string 
}

export default class ControleTarefas {
 
 obterMaiorId()  {
        let maiorId = 0;
        for (let i = 0; i < Tarefas.length; i++) {
          const id =  Tarefas[i].id ;
          if (id > maiorId) {
            maiorId = id;
          }
        }
        return maiorId ;
   };
 
  public obterTarefas()   {
      return Tarefas;
     
  }
   
  public incluir(tarefa:string):void {
    const novaTarefa:propsTarefa = {'id': +this.obterMaiorId(), 'relevancia':'baixa', 'title':tarefa}
    Tarefas.push(novaTarefa)  
    console.log(Tarefas,novaTarefa)   
  }
 

  public editar(id:number, relevancia:string, title:string)  {
    let tarefaEditada = {'id': id, 'relevancia':relevancia, 'title':title}
    const novaListaTarefas = Tarefas.filter((tarefa)=> tarefa.id !== id )
    novaListaTarefas.push(tarefaEditada)
    return novaListaTarefas 
  }

  public excluir(): void {
      
  
  }
}
 
