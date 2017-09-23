import { ShortcutsPage } from './app.po';

describe('shortcuts App', () => {
  let page: ShortcutsPage;

  beforeEach(() => {
    page = new ShortcutsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
