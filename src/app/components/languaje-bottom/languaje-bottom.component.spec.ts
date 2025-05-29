import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguajeBottomComponent } from './languaje-bottom.component';

describe('LanguajeBottomComponent', () => {
  let component: LanguajeBottomComponent;
  let fixture: ComponentFixture<LanguajeBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguajeBottomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguajeBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
