export class Tarefa {
    
    private _id: string;
    private _relevancia: string;
    private _title: string; 
    
    constructor(id: string,relevancia:string, title: string) {
        
        this._id = id;
        this._relevancia=relevancia;
        this._title = title; 
    } 

    public set id(value:string){
      this._id =value
  }

  public get id():string{
    return this._id?this._id:''; 
}
    public get relevancia():string{
        return this._relevancia? this._relevancia :'';
    }     
     
    public get titulo(): string {
        return this._title? this._title :'';
      }
 

}

 