import { Tarefa } from "../modelo/Tarefa";

const Tarefas  =[
    {id:1, relevancia:'importante', title:"Tarefas da Estacio!", checked: false},
    {id:2, relevancia:'urgente', title:'Tarefas do dia dia!', checked: false},
    {id:3, relevancia:'urgente', title:'Terminar a minha parte da missão!', checked: false},
]

interface propsTarefa{
   id :  number;
   relevancia : string;
   title : string;
   checked: boolean;
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
    const novaTarefa:propsTarefa = {'id': +this.obterMaiorId(), 'relevancia':'baixa', 'title':tarefa, 'checked': false}
    Tarefas.push(novaTarefa)  
    console.log(Tarefas,novaTarefa)   
  }
 

  public editar(id:number, relevancia:string, title:string, checked:boolean)  {
    let tarefaEditada = {'id': id, 'relevancia':relevancia, 'title':title, 'checked':checked}
    const novaListaTarefas = Tarefas.filter((tarefa)=> tarefa.id !== id )
    novaListaTarefas.push(tarefaEditada)
    return novaListaTarefas 
  }

  public excluir(): void {
      
  
  }
}
 
