import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {

  constructor(private httpClient:HttpClient){}

  public async recuperarEntradas( url:string):Promise<any>{

     return this.httpClient.get(url).toPromise()
     .then(res=>{
       console.log("assdasd",res)
       return Promise.resolve(res)
     })
     .catch(err=>Promise.reject(err));
  }



}
