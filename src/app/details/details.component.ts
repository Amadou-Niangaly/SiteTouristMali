import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZoneTouristService } from '../zone-tourist.service';
import { ZoneTourist } from '../zone-tourist/zone-tourist';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent  implements OnInit{
  zoneTourist:ZoneTourist|undefined;

  constructor(private route:ActivatedRoute,private zoneTouristService:ZoneTouristService){

  }
ngOnInit(): void {
    const zoneTouristId = Number(this.route.snapshot.params['id']);
    this.zoneTourist=this.zoneTouristService.getZoneTOuristById(zoneTouristId);
}
}
