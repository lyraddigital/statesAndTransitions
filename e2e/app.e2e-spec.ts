import { StatesAndTransitionsPage } from './app.po';

describe('states-and-transitions App', function() {
  let page: StatesAndTransitionsPage;

  beforeEach(() => {
    page = new StatesAndTransitionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
