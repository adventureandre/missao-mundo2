export class Tarefa {
    
    private _id?: number;
    private _relevancia?: string;
    private _title?: string; 
    
    constructor(id?: number,relevancia?:string, title?: string) {
        
        this._id = id;
        this._relevancia=relevancia;
        this._title = title; 
    } 

    public set id(value:number){
      this._id =value
  }

  public get id():number{
    return this._id?this._id:-1; 
}
    public get relevancia():string{
        return this._relevancia? this._relevancia :'';
    }     
     
    public get titulo(): string {
        return this._title? this._title :'';
      }
 

}

 