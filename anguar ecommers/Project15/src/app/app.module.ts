import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { LoginComponent } from './pages/login/login.component';
//import { IndexComponent } from './pages/index/index.component';
//import { ShopComponent } from './pages/shop/shop.component';
//import { SmproductComponent } from './pages/smproduct/smproduct.component';
//import { BlogComponent } from './pages/blog/blog.component';
//import { ContactComponent } from './pages/contact/contact.component';
//import { AboutusComponent } from './pages/aboutus/aboutus.component';
//import { CartComponent } from './pages/cart/cart.component';
import { HeaderComponent } from './common/header/header.component';
import { NewsletterComponent } from './common/newsletter/newsletter.component';
import { FooterComponent } from './common/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
//import { RouterModule } from '@angular/router';

/*const routes = [
  { path: '', Component: IndexComponent},
  { path: 'login', Component: LoginComponent},
  { path: 'shop', Component: ShopComponent},
  { path: 'smproduct', Component: SmproductComponent},
  { path: 'blog', Component: BlogComponent},
  { path: 'contact', Component: ContactComponent},
  { path: 'aboutus', Component: AboutusComponent},
  { path: 'cart', Component: CartComponent}
]*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsletterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
