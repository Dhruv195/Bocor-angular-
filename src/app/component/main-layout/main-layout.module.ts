import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainLayoutRoutingModule } from "./main-layout-routing.module";
import { MainLayoutComponent } from "./main-layout.component";
import { HomeComponent } from "./home/home.component";
import { NgbAlertModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TeamComponent } from "./team/team.component";
import { ContactComponent } from "./contact/contact.component";
import { FeaturesComponent } from "./features/features.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FaqComponent } from "./faq/faq.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClientComponent } from "./client/client.component";
import { BannerComponent } from "./banner/banner.component";
import { PopUpComponent } from "./about/pop-up/pop-up.component";

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    TeamComponent,
    ContactComponent,
    FeaturesComponent,
    PricingComponent,
    FaqComponent,
    ClientComponent,
    PopUpComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgbAlertModule,
  ],
  exports: [PopUpComponent],
})
export class MainLayoutModule {}
