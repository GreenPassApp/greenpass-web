import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotValidComponent } from './not-valid.component';

describe('NotValidComponent', () => {
  let component: NotValidComponent;
  let fixture: ComponentFixture<NotValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotValidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
