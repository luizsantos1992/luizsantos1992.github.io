import { WebAppAngular2Page } from './app.po';

describe('web-app-angular2 App', () => {
  let page: WebAppAngular2Page;

  beforeEach(() => {
    page = new WebAppAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
