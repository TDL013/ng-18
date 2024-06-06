import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiDetailsComponent } from './swapi-details.component';

describe('SwapiDetailsComponent', () => {
  let component: SwapiDetailsComponent;
  let fixture: ComponentFixture<SwapiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwapiDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwapiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
