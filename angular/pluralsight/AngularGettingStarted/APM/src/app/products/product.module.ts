import { NgModule } from "@angular/core"
import { ProductDetailComponent } from "../product-detail/product-detail.component"
import { ProductDetailGuard } from "../product-detail/product-detail.guard"
import { ProductDetailResolver } from "../product-detail/product-detail.resolver"
import { ProductsComponent } from "./products.component"
import { RouterModule } from "@angular/router"
import { SharedModule } from "../shared/shared.module"

const routes = [
  { path: "products", component: ProductsComponent },
  {
    path: "products/:id",
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent,
    resolve: { productIds: ProductDetailResolver },
  },
]

@NgModule({
  declarations: [ProductDetailComponent, ProductsComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class ProductModule {}
