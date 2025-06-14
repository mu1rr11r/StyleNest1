import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BlackLayoutComponent } from './layout/black-layout/black-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { authGuard } from './core/guards/auth.guard';
import { logtGuard } from './core/guards/logt.guard';

export const routes: Routes = [
  {path:'',component:AuthLayoutComponent,canActivate:[logtGuard],
    children:[
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent,
      }
    ]
  },
  {path:'',component:BlackLayoutComponent,canActivate:[authGuard],
      children:[
          {path:'',redirectTo:'home',pathMatch:'full'},
          {path:'home',component:HomeComponent},
          {path:'brands',component:BrandsComponent},
          {path:'cart', component:CartComponent},
          {path:'categories',component:CategoriesComponent},
          {path:'footer',component:FooterComponent},
          {path:'logout',component:LogoutComponent}
        ]
  },
  {path:"**",component:NotfoundComponent}
];
