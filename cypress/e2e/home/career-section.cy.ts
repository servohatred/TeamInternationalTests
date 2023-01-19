import CareerComponent from "./page-objects/career-component.po";
import HomePage from "./page-objects/home-page.po";

describe("Team International Landing Page - Tests for Career section", () => {
  let homePage : HomePage
  let careerSection : CareerComponent
  beforeEach(() => {
    homePage = new HomePage();
    careerSection = homePage.goToCareerSection();
  });

    it(`Verify title exist `, () => {
      careerSection.validateTitle();
    });

    it(`Verify description exist `, () => {
      careerSection.validateLabel();
    });

    it(`Verify click actions `, () => {
       careerSection.validateClickInOptions();
    });

});
