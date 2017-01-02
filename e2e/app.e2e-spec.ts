import { Alexlondon07Angular2Page } from './app.po';

describe('alexlondon07-angular2 App', function() {
  let page: Alexlondon07Angular2Page;

  beforeEach(() => {
    page = new Alexlondon07Angular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
