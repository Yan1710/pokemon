import { Component, OnInit } from '@angular/core';
import { InterfaceService } from 'src/app/Shared/interface.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {
  public ListadoPokemones:any;
  public listadoPokemon:any;

  constructor(private interfaceService:InterfaceService ) {

  }

  async ngOnInit() {
    await this.recuperarPokemones();
  }
  private async recuperarPokemones(){
    try{
      console.log("vamos a consumir api")
      const respuesta=await this.interfaceService.recuperarEntradas('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
       this.ListadoPokemones=respuesta.results;
      //const pokea=await this.interfaceService.recuperarEntradas(respuesta.url);
    //this.listadoPokemon.url=pokea.abilities;


      for(const pokemon of this.ListadoPokemones ){
        const datosPokemon= await this.interfaceService.recuperarEntradas(pokemon.url);
        //console.log("perro aqui esta los datos",datosPokemon.sprites.other.home.front_default)
        pokemon.url=datosPokemon.sprites.other.home.front_default;
      }


      console.log("pokemones",this.ListadoPokemones)

    }



    catch(error){
      console.log("no se pudo consumir")
    }

  }
  public MostrarPokemon(){
     const pokemon=this.ListadoPokemones;
 console.log("oe perro",pokemon )
  console.log( `entrada seleccionada `);
  }

}
