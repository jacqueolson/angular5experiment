import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaninputComponent } from './scaninput.component';

describe('ScaninputComponent', () => {
  let component: ScaninputComponent;
  let fixture: ComponentFixture<ScaninputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaninputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaninputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
