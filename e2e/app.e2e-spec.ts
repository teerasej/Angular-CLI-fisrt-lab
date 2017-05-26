import { NFAppPage } from './app.po';

describe('nfapp App', () => {
  let page: NFAppPage;

  beforeEach(() => {
    page = new NFAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
