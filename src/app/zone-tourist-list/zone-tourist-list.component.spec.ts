import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneTouristListComponent } from './zone-tourist-list.component';

describe('ZoneTouristListComponent', () => {
  let component: ZoneTouristListComponent;
  let fixture: ComponentFixture<ZoneTouristListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneTouristListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneTouristListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
