import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'lib-softfobia-uploader',
  templateUrl: './softfobia-uploader.component.html',
  imports: [CommonModule],
  styleUrls: ['./softfobia-uploader.component.css']
})
export class SoftfobiaUploaderComponent implements OnInit {
  @Output() onUpload = new EventEmitter<File>();

  timesTamp: number = new Date().getTime();
  ngOnInit() {
    console.log(`uploader mounted at ${this.timesTamp}`);
  }

  file: File | null = null;

  /**
   * On file selected
   * @param fileInput
   */
  onFileSelected(fileInput: HTMLInputElement): void {
    const files = fileInput.files;
    console.log(`onFileSelected: ${files}`);
    if (files && files.length > 0) {
      this.file = files[0];
      this.onUpload.emit(this.file);
    }
  }

  /** Uploads the selected file to the server.
   * @param event
   */
  onDrop(event: DragEvent): void {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    console.log(`onDrop: ${file}`);
    if (file) {
      this.file = file;
      this.onUpload.emit(this.file);
    }
  }

  /**
   * On drag over
   * @param event
   */
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
}
