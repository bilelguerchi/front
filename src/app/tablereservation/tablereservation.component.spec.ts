import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablereservationComponent } from './tablereservation.component';

describe('TablereservationComponent', () => {
  let component: TablereservationComponent;
  let fixture: ComponentFixture<TablereservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablereservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablereservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
