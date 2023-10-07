import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftfobiaLibraryComponent } from './softfobia-library.component';

describe('SoftfobiaLibraryComponent', () => {
  let component: SoftfobiaLibraryComponent;
  let fixture: ComponentFixture<SoftfobiaLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftfobiaLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftfobiaLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
