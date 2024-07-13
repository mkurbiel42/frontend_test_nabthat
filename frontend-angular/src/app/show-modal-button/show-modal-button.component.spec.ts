import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowModalButtonComponent } from './show-modal-button.component';

describe('ShowModalButtonComponent', () => {
  let component: ShowModalButtonComponent;
  let fixture: ComponentFixture<ShowModalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowModalButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowModalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
