import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookComponent } from "./books/book/book.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
    { path: '', component: BookComponent },
    { path: 'cart', component: CartComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }