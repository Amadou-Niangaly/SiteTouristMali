import { Injectable } from '@angular/core';
import { ZoneTourist } from './zone-tourist/zone-tourist';

@Injectable({
  providedIn: 'root'
})
export class ZoneTouristService {
   protected villeList:ZoneTourist[]=[
    {
     id:1,
     image:"assets/segou.webp",
     nom:"zone tourist de segou",
     pays:"Mali",
     ville:"Segou",
     descriptionPetit:"ville tourisque important du Mali",
     descriptionLong:"Ville jjhjhjhhnhjhjh"
    },
    {
     id:2,
     image:"assets/sanga.jpg",
     nom:"zone tourist de Sanga",
     pays:"Mali",
     ville:"Pays dogon",
     descriptionPetit:"ville tourisque important du Mali situe dqns le pqys dogon",
     descriptionLong:"Ville jjhjhjhhnhjhjh"
    },
    {
     id:3,
     image:"assets/Koulikoro.jpg",
     nom:"zone tourist de segou",
     pays:"Mali",
     ville:"Koulikoro",
     descriptionPetit:"ville tourisque important du Mali dans la region de koulikoro",
     descriptionLong:"Ville jjhjhjhhnhjhjh"
    },
    {
     id:4,
     image:"assets/mosque.jpg",
     nom:"zone tourist de Tombouctou",
     pays:"Mali",
     ville:"Tombouctou",
     descriptionPetit:"ville tourisque important du Mali dans la region de Tombouctou",
     descriptionLong:"Ville jjhjhjhhnhjhjh"
    },
    {
     id:5,
     image:"assets/Djene.jpg",
     nom:"zone tourist de Djenée",
     pays:"Mali",
     ville:"Djenée",
     descriptionPetit:"ville tourisque important du Mali dans la region de San",
     descriptionLong:"Ville jjhjhjhhnhjhjh"
    },
    {
     id:6,
     image:"assets/badiangara.jpg",
     nom:"zone tourist au pays Dogon",
     pays:"Mali",
     ville:"Badiangara",
     descriptionPetit:"ville tourisque important du Mali dans la region de Badiangara",
     descriptionLong:"Ville jjhjhjhhnhjhjh"
    }
 ];

  constructor() { }
  getAllZoneTouristList():ZoneTourist[]{
    return this.villeList;
  }
  getZoneTOuristById(id:number):ZoneTourist|undefined{
    return this.villeList.find(villeList=>villeList.id===id);

  }
}
