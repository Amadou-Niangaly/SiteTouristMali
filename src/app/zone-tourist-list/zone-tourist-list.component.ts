import { Component, Input } from '@angular/core';
import { ZoneTourist } from '../zone-tourist/zone-tourist';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { DetailsComponent } from "../details/details.component";
import { ZoneTouristService } from '../zone-tourist.service';

@Component({
  selector: 'app-zone-tourist-list',
  standalone: true,
  imports: [CommonModule, RouterModule, DetailsComponent],
  templateUrl: './zone-tourist-list.component.html',
  styleUrl: './zone-tourist-list.component.css'
})
export class ZoneTouristListComponent {
  @Input() zoneTourist!:ZoneTourist;
  villeList:ZoneTourist[]=[];
  constructor(private zoneTouristService:ZoneTouristService){
    this.villeList=this.zoneTouristService.getAllZoneTouristList();
  }

}
