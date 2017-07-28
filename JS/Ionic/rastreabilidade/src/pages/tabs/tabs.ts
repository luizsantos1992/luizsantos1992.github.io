import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { BulasPage } from './../bulas/bulas';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RastreabilidadePage } from './../rastreabilidade/rastreabilidade';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = RastreabilidadePage;
  tab5Root = BulasPage;

  constructor() {

  }
}
