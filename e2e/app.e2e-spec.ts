import { huperPage } from './app.po';

describe('huper App', function() {
  let page: huperPage;

  beforeEach(() => {
    page = new huperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('huper works!');
  });
});
