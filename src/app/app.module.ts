import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { AssemblyLineModule } from "./assemblyline/assemblyline.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,FormsModule, AssemblyLineModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
