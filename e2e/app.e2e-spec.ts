import { BContactPage } from './app.po';

describe('b-contact App', () => {
  let page: BContactPage;

  beforeEach(() => {
    page = new BContactPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
