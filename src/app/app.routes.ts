import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'addProduct', component: AddProductComponent},
    {path: 'deleteProduct/:id', component: DeleteProductComponent},
    {path: '**', redirectTo: '/home'}, //Ruta para errores 404
    {path: '', redirectTo: '/home', pathMatch: 'full'}// Ruta por defecto
];
