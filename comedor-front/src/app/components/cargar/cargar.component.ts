import { SubirService } from './../../services/subir.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.css']
})
export class CargarComponent implements OnInit {

  @ViewChild('labelImport')
  labelImport: ElementRef;
  formImport: FormGroup;
  uploadedFiles: Array <File>;

  constructor(
    private uploadService: SubirService,
    private el: ElementRef,
    private route: ActivatedRoute,
    private router: Router) {

      this.formImport = new FormGroup({
        importFile: new FormControl('', Validators.required)
      });
  }

  ngOnInit(): void {
  }

  onUpload(){

    const inputEl: HTMLInputElement =  this.el.nativeElement.querySelector('#input-custom-file');
    const fileCount: number = inputEl.files.length;

    const formData = new FormData();
    if (fileCount > 0) {

      for (let i = 0; i < fileCount; i++) {
        formData.append('myfile', inputEl.files.item(i));
      }
      this.uploadService.uploadFile(formData).subscribe((res) => {
        console.log('response received is ', res);
        this.router.navigate(['/listado']);
      });
    }
  }
  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
  }
}
