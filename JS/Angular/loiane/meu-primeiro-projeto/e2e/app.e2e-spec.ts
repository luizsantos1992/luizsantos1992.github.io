import { MeuPrimeiroProjetoPage } from './app.po';

describe('meu-primeiro-projeto App', () => {
  let page: MeuPrimeiroProjetoPage;

  beforeEach(() => {
    page = new MeuPrimeiroProjetoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
