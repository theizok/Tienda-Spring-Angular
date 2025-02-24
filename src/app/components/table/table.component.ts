import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {

  private apiService = inject(ApiService);
  data: Product[] = [];
  

  ngOnInit(): void {
    this.fillData();

  }
  fillData(){
    this.apiService.getProducts().subscribe(data => {this.data = data;
      console.log(data);
    });
  }

}
