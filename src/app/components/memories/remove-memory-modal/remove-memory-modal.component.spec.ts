import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMemoryModalComponent } from './remove-memory-modal.component';

describe('RemoveMemoryModalComponent', () => {
  let component: RemoveMemoryModalComponent;
  let fixture: ComponentFixture<RemoveMemoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveMemoryModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveMemoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
