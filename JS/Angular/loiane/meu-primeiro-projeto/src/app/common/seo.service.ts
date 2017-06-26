import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BrowserDomAdapter } from '@angular/platform-browser';


@Injectable()
export class SeoService {

  /**
  * Angular 2 Title Service
  */
  private titleService: Title;
 /**
  * <head> Element of the HTML document
  */
  private headElement: HTMLElement;
 /**
  * <head> Element of the HTML document
  */
  private metaDescription: HTMLElement;
 /**
  * <head> Element of the HTML document
  */
  private robots: HTMLElement;
  private DOM: any;
 
 /**
  * Inject the Angular 2 Title Service
  * @param titleService
  */
  constructor(titleService: Title){
    this.titleService = titleService;
    this.DOM = new BrowserDomAdapter();
 
   /**
    * get the <head> Element
    * @type {any}
    */
    this.headElement = this.DOM.query('head');
    this.metaDescription = this.getOrCreateMetaElement('description');
    this.robots = this.getOrCreateMetaElement('robots');
  }
 
  public getTitle(): string {
    return this.titleService.getTitle();
  }
 
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
 
  public getMetaDescription(): string {
    return this.metaDescription.getAttribute('content');
  }
 
  public setMetaDescription(description: string) {
    this.metaDescription.setAttribute('content', description);
  }
 
  public getMetaRobots(): string {
    return this.robots.getAttribute('content');
  }
 
  public setMetaRobots(robots: string) {
    this.robots.setAttribute('content', robots);
  }
 
   /**
    * get the HTML Element when it is in the markup, or create it.
    * @param name
    * @returns {HTMLElement}
    */
    private getOrCreateMetaElement(name: string): HTMLElement {
      let el: HTMLElement;
      el = this.DOM.query('meta[name=' + name + ']');
      if (el === null) {
        el = this.DOM.createElement('meta');
        el.setAttribute('name', name);
        this.headElement.appendChild(el);
      }
      return el;
    }

}
