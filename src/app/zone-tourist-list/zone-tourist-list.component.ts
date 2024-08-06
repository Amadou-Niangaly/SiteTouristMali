import { Component, Input } from '@angular/core';
import { ZoneTourist } from '../zone-tourist/zone-tourist';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { DetailsComponent } from "../details/details.component";
import { ZoneTouristService } from '../zone-tourist.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-zone-tourist-list',
  standalone: true,
  imports: [CommonModule, RouterModule, DetailsComponent,NgxPaginationModule],
  templateUrl: './zone-tourist-list.component.html',
  styleUrl: './zone-tourist-list.component.css'
})
export class ZoneTouristListComponent {
  @Input() zoneTourist!:ZoneTourist;
  villeList:ZoneTourist[]=[];
  p:number=1;
  constructor(private zoneTouristService:ZoneTouristService){
    this.villeList=this.zoneTouristService.getAllZoneTouristList();
  }

}
