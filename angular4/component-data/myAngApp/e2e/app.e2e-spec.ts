import { MyAngAppPage } from './app.po';

describe('my-ang-app App', () => {
  let page: MyAngAppPage;

  beforeEach(() => {
    page = new MyAngAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
