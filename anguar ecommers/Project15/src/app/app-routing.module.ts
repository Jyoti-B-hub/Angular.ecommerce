import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SmproductComponent } from './pages/smproduct/smproduct.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CartComponent } from './pages/cart/cart.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', Component: IndexComponent},
  { path: 'login', Component: LoginComponent},
  { path: 'shop', Component: ShopComponent},
  { path: 'smproduct', Component: SmproductComponent},
  { path: 'blog', Component: BlogComponent},
  { path: 'contact', Component: ContactComponent},
  { path: 'aboutus', Component: AboutusComponent},
  { path: 'cart', Component: CartComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    IndexComponent,
    ShopComponent,
    SmproductComponent,
    BlogComponent,
    ContactComponent,
    AboutusComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
