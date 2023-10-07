import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftfobiaUploaderComponent } from './softfobia-uploader.component';

describe('UploaderComponent', () => {
  let component: SoftfobiaUploaderComponent;
  let fixture: ComponentFixture<SoftfobiaUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftfobiaUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftfobiaUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
