import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParagraphModalComponent } from './edit-paragraph-modal.component';

describe('EditParagraphModalComponent', () => {
  let component: EditParagraphModalComponent;
  let fixture: ComponentFixture<EditParagraphModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditParagraphModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditParagraphModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
