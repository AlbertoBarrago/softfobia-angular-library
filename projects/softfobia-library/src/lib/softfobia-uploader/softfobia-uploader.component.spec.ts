import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftfobiaUploaderComponent } from './softfobia-uploader.component';

describe('SoftfobiaUploaderComponent', () => {
  let component: SoftfobiaUploaderComponent;
  let fixture: ComponentFixture<SoftfobiaUploaderComponent>;

  //standalone approach to testing
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SoftfobiaUploaderComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SoftfobiaUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create SoftfobiaUploaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the selected file when onFileSelected is called', () => {
    // Arrange
    const fileInput = document.createElement('input');
    const file = new File(['test'], 'test.txt');
    spyOn(component.onUpload, 'emit');

    // Create a mock FileList
    const mockFileList = {
      0: file,
      length: 1,
      item: (index: number) => file,
    };

    // Act
    // Set the 'files' property with the mock FileList
    Object.defineProperty(fileInput, 'files', {
      value: mockFileList,
    });

    component.onFileSelected(fileInput);
    fileInput.dispatchEvent(new Event('change'));

    // Assert
    expect(component.file).toEqual(file);
    expect(component.onUpload.emit).toHaveBeenCalledWith(file);
  });

  it('should emit the selected file when onDrop is called', () => {
    // Arrange
    const dragEvent = new DragEvent('drop');
    const file = new File(['test'], 'test.txt');
    spyOn(component.onUpload, 'emit');

    // Act
    Object.defineProperty(dragEvent, 'dataTransfer', {
      value: {
        files: [file],
      },
    });
    component.onDrop(dragEvent);

    // Assert
    expect(component.file).toEqual(file);
    expect(component.onUpload.emit).toHaveBeenCalledWith(file);
  });

  it('should prevent default behavior on dragOver', () => {
    // Arrange
    const dragEvent = new DragEvent('dragover');
    spyOn(dragEvent, 'preventDefault');

    // Act
    component.onDragOver(dragEvent);

    // Assert
    expect(dragEvent.preventDefault).toHaveBeenCalled();
  });
});
