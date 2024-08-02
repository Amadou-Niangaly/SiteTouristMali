import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ZoneTouristComponent } from "./zone-tourist/zone-tourist.component";
import { ZoneTouristListComponent } from "./zone-tourist-list/zone-tourist-list.component";
import { DetailsComponent } from "./details/details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ZoneTouristComponent, ZoneTouristListComponent, DetailsComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppTouristMali';
  searchText:string='';
  logo:string="assets/logo.png"
 
}
