import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryMasterComponent } from './memory-master.component';

describe('MemoryMasterComponent', () => {
  let component: MemoryMasterComponent;
  let fixture: ComponentFixture<MemoryMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
