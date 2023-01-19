import HomePage from "./page-objects/home-page.po";
import SolutionsComponent from "./page-objects/solutions-component.po";

describe("Team International Landing Page - Tests for Solutions section", () => {
  let homePage : HomePage
  let solutionsSection : SolutionsComponent
  beforeEach(() => {
    homePage = new HomePage();
    solutionsSection = homePage.goToSolutionsSection();
  });

    it(`Verify title and label exist `, () => {
      solutionsSection.validateTitle();
      solutionsSection.validateLabel();
    });

    it(`Verify hover actions `, () => {
       solutionsSection.validateHoverInOptions();
    });

    it(`Verify click actions `, () => {
      solutionsSection.validateClickInOptions();
    });

});
