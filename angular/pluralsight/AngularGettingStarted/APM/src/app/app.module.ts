import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"

import { AppComponent } from "./app.component"
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe"
import { ProductDetailComponent } from "./product-detail/product-detail.component"
import { ProductDetailGuard } from "./product-detail/product-detail.guard"
import { ProductListComponent } from "./products/products.component"
import { StarComponent } from "./shared/star.component"
import { WelcomeComponent } from "./home/welcome.component"

const routes = [
  { path: "products", component: ProductListComponent },
  {
    path: "products/:id",
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent,
  },
  { path: "welcome", component: WelcomeComponent },
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "**", redirectTo: "welcome", pathMatch: "full" },
]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
