import { Component, OnInit } from "@angular/core"
import { IProduct } from "./product.interface"
import { ProductService } from "./product.service"

@Component({
  selector: "pm-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  _listFilter: string
  errorMessage: string
  filteredProducts: IProduct[]
  imageWidth: number = 50
  imageMargin: number = 2
  pageTitle: string = "Product List"
  products: IProduct[] = []
  showImage: boolean = false

  get listFilter(): string {
    return this._listFilter
  }
  set listFilter(value: string) {
    this._listFilter = value
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log("In OnInit")
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products
        this.filteredProducts = this.products
      },
      (error) => (this.errorMessage = <any>error)
    )
    this.listFilter = ""
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase()

    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    )
  }

  toggleImage = (): void => {
    this.showImage = !this.showImage
  }
}
