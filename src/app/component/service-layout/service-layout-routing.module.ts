import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllFaqComponent } from "./all-faq/all-faq.component";
import { AllTeamComponent } from "./all-team/all-team.component";
import { AllServiceComponent } from "./all-service/all-service.component";
import { AllPortfolioComponent } from "./all-portfolio/all-portfolio.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { SubscriberListComponent } from "./subscriber-list/subscriber-list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "all-faq",
    pathMatch: "full",
  },
  {
    path: "all-faq",
    component: AllFaqComponent,
  },
  {
    path: "all-team",
    component: AllTeamComponent,
  },
  {
    path: "all-service",
    component: AllServiceComponent,
  },
  {
    path: "contact-list",
    component: ContactListComponent,
  },
  {
    path: "contact-list/:id",
    component: ContactListComponent,
  },
  {
    path: "subscriber-list",
    component: SubscriberListComponent,
  },
  {
    path: "all-portfolio",
    component: AllPortfolioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceLayoutRoutingModule {}
