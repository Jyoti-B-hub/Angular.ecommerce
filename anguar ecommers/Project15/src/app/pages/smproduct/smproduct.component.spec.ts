import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmproductComponent } from './smproduct.component';

describe('SmproductComponent', () => {
  let component: SmproductComponent;
  let fixture: ComponentFixture<SmproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
