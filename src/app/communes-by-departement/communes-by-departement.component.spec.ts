import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunesByDepartementComponent } from './communes-by-departement.component';

describe('CommunesByDepartementComponent', () => {
  let component: CommunesByDepartementComponent;
  let fixture: ComponentFixture<CommunesByDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunesByDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunesByDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
