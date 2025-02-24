import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class DeleteProductComponent implements OnInit {
  idProducto: string | null = null;
  producto: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.idProducto = this.route.snapshot.paramMap.get('id');
    if (this.idProducto) {
      this.cargarProducto();
    }
  }

  cargarProducto() {
    if (this.idProducto) {
      this.apiService.getProductById(Number(this.idProducto)).subscribe({
        next: (data: any) => {
          this.producto = {
            idProduct: data.idProduct,
            productName: data.productName,
            productDescription: data.productDescription,
            productPrice: data.productPrice,
          };
        },
        error: (err: any) => console.error('Error al cargar el producto', err),
      });
    }
  }
}