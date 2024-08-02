import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZoneTouristListComponent } from "../zone-tourist-list/zone-tourist-list.component";

@Component({
  selector: 'app-zone-tourist',
  standalone: true,
  imports: [CommonModule, FormsModule, ZoneTouristListComponent],
  templateUrl: './zone-tourist.component.html',
  styleUrl: './zone-tourist.component.css'
})
export class ZoneTouristComponent {
  searchText:string='';

}
