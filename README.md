# Softfobia Library

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.0.

## Angular File Uploader Component
The Angular File Uploader Component is a versatile component that allows users to upload files with ease. It can be easily integrated into your Angular applications, providing a user-friendly file upload experience.

#### Features
- Drag and drop files for upload.
- Customizable upload button styling.
- Supports various file types and sizes.
- Easy integration with Angular applications.
- Fully customizable using CSS variables.

#### Installation
1. To use the Angular File Uploader Component in your Angular project, follow these steps:
```bash
npm install softfobia-library
```
2. Replace your-library-name with the actual name of your library.

_Import the SoftfobiaLibraryModule into your Angular application module:_

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SoftfobiaLibraryModule } from 'your-library-name';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SoftfobiaLibraryModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
3. Use the lib-softfobia-uploader component in your application's templates:
```angular2html
 <lib-softfobia-uploader (onUpload)="onUpload($event)"></lib-softfobia-uploader>
```

### Styling
The component's appearance can be customized using CSS variables. You can define these variables in your application's stylesheets to control the component's colors, sizes, and more.

_Example CSS variables:_
```css
:root {
  --upload-container-height: 300px;
  --upload-container-border: 2px dashed #ccc;
  --upload-container-border-radius: 10px;

  --upload-button-background: #3498db;
  --upload-button-color: #fff;
  --upload-button-border-radius: 5px;
  --upload-button-padding: 10px 20px;
  --upload-button-hover-background: #2980b9;
}
```



