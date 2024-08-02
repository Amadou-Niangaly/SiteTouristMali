import { Routes } from '@angular/router';
import { ZoneTouristListComponent } from './zone-tourist-list/zone-tourist-list.component';
import { DetailsComponent } from './details/details.component';
import { ZoneTouristComponent } from './zone-tourist/zone-tourist.component';

export const routes: Routes = [
    {path:"",component:ZoneTouristComponent},
    {path:"detail/:id",component:DetailsComponent}
];
