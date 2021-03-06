import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"

import { AppComponent } from "./app.component"
import { WelcomeComponent } from "./home/welcome.component"
import { ProductModule } from "./products/product.module"

const routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "**", redirectTo: "welcome", pathMatch: "full" },
]
@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ProductModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
