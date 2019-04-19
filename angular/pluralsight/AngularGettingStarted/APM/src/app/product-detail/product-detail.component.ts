import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { IProduct } from "../products/product.interface"
import { ProductService } from "../products/product.service"

@Component({
  selector: "pm-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  errorMessage: string
  pageTitle: string = "Product Detail"
  product: IProduct

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id")
    this.pageTitle += `: ${id}`

    this.productService
      .getProduct(id)
      .subscribe(
        (product) => (this.product = product),
        (error) => (this.errorMessage = <any>error)
      )
  }

  onBack(): void {
    this.router.navigate(["/products"])
  }
}
