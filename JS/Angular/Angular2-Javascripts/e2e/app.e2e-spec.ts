import { Angular2JavascriptsPage } from './app.po';

describe('angular2-javascripts App', () => {
  let page: Angular2JavascriptsPage;

  beforeEach(() => {
    page = new Angular2JavascriptsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
