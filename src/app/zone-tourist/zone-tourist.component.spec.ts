import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneTouristComponent } from './zone-tourist.component';

describe('ZoneTouristComponent', () => {
  let component: ZoneTouristComponent;
  let fixture: ComponentFixture<ZoneTouristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneTouristComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
