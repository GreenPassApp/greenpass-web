import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpensourceComponent } from './opensource.component';

describe('OpensourceComponent', () => {
  let component: OpensourceComponent;
  let fixture: ComponentFixture<OpensourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpensourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpensourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
