import { PracticingComponentsPage } from './app.po';

describe('practicing-components App', () => {
  let page: PracticingComponentsPage;

  beforeEach(() => {
    page = new PracticingComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
