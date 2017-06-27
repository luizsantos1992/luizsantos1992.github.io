import { AngularSEOPage } from './app.po';

describe('angular-seo App', () => {
  let page: AngularSEOPage;

  beforeEach(() => {
    page = new AngularSEOPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
