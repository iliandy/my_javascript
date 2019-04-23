import { Injectable } from "@angular/core"
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from "@angular/router"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let id = +next.params.id

    if (isNaN(id) || id < 1) {
      alert("Invalid product Id")
      this.router.navigate(["/products"])
      return false
    }

    return true
  }
}
