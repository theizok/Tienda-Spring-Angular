import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent{
  form : FormGroup;
  isSubmitting = false;
  submitError: string | null = null;


  //Validar que el formulario al momento de enviarlo tenga los datos

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ){
    this.form = this.formBuilder.group({

      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: ['', Validators.required]
    
    })
  }
  
  //Se llama al servicio api con el metodo para guardar o actualizar productos que recibe de párametro el contenido del formulario
  onSubmit(): void {
    if (this.form.valid) {
      this.isSubmitting = true;
      this.submitError = null;
      
      //Creacion del producto a partir del formulario =D
      const product: Product = {
        ...this.form.value,
        productPrice: Number(this.form.value.productPrice),
        productName: this.form.value.productName,
        productDescription: this.form.value.productDescription
      }


      this.apiService.saveOrUpdateProduct(product).subscribe({
        next: (response) => {
        console.log('Producto agregado correctamente', response);
        this.form.reset();
        },
        error: (error) => {
          console.error('Error al crear el producto', error);
          }
      });
    }
  }
}
