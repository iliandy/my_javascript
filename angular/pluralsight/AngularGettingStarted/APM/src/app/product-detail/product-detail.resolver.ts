import { Injectable } from "@angular/core"
import {
  Resolve,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from "@angular/router"
import { Observable } from "rxjs"
import { map } from "rxjs/operators"
import { ProductService } from "../products/product.service"

@Injectable()
export class ProductDetailResolver implements Resolve<T> {
  productId: number

  constructor(private productService: ProductService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this.productId = +route.params.id

    return this.productService.getProductIds().pipe(
      map((productIds: number[]) => {
        if (!productIds.includes(this.productId)) {
          alert("Invalid product Id")
          this.router.navigate(["/products"])
          return
        }
        return productIds
      })
    )
  }
}
