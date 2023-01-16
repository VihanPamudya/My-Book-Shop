import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { BookComponent } from "./books/book/book.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
    { path: '', component: BookComponent },
    { path: 'cart', component: CartComponent, canActivate: [AuthGuard]  },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }