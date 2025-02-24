import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [TableComponent,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
