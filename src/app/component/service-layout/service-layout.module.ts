import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceLayoutRoutingModule } from './service-layout-routing.module';
import { AllFaqComponent } from './all-faq/all-faq.component';
import { AllServiceComponent } from './all-service/all-service.component';
import { AllTeamComponent } from './all-team/all-team.component';
import { AllPortfolioComponent } from './all-portfolio/all-portfolio.component';
import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ServiceLayoutComponent } from './service-layout.component';
import { NgbAccordionCollapse, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AllFaqComponent,
    AllServiceComponent,
    AllTeamComponent,
    AllPortfolioComponent,
    SubscriberListComponent,
    ContactListComponent,
    ServiceLayoutComponent,
    

  ],
  imports: [
    CommonModule,
    ServiceLayoutRoutingModule,
    NgbAccordionCollapse,
    NgbModule,
    NgbPaginationModule
  ],
})
export class ServiceLayoutModule { }
