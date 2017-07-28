import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TopoComponent } from './topo/topo.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuComponent, TopoComponent, AboutComponent, ServicesComponent, PortfolioComponent, PricingComponent, ContactComponent, FooterComponent],
  exports:[MenuComponent, TopoComponent, AboutComponent, ServicesComponent, PortfolioComponent, PricingComponent, ContactComponent, FooterComponent]
})
export class PagesModule { }
