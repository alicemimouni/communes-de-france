import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCommuneComponent } from './search-commune.component';

describe('SearchCommuneComponent', () => {
  let component: SearchCommuneComponent;
  let fixture: ComponentFixture<SearchCommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCommuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
