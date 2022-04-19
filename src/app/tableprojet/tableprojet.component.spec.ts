import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableprojetComponent } from './tableprojet.component';

describe('TableprojetComponent', () => {
  let component: TableprojetComponent;
  let fixture: ComponentFixture<TableprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
