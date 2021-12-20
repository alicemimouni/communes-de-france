import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementsByRegionComponent } from './departements-by-region.component';

describe('DepartementsByRegionComponent', () => {
  let component: DepartementsByRegionComponent;
  let fixture: ComponentFixture<DepartementsByRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementsByRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementsByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
