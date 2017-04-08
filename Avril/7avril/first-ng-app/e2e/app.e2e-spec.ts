import { FirstNgAppPage } from './app.po';

describe('first-ng-app App', () => {
  let page: FirstNgAppPage;

  beforeEach(() => {
    page = new FirstNgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
