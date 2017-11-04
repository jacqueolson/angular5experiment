import { Angular5experimentPage } from './app.po';

describe('angular5experiment App', () => {
  let page: Angular5experimentPage;

  beforeEach(() => {
    page = new Angular5experimentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
