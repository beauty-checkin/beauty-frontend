import { BeautyFrontendPage } from './app.po';

describe('beauty-frontend App', () => {
  let page: BeautyFrontendPage;

  beforeEach(() => {
    page = new BeautyFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
