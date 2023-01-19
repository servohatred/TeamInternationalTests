import EducationComponent from "./page-objects/education-component.po";
import HomePage from "./page-objects/home-page.po";

describe("Team International Landing Page - Tests for Education section", () => {
  let homePage : HomePage
  let locationsSection : EducationComponent
  beforeEach(() => {
    homePage = new HomePage();
    locationsSection = homePage.goToEducationSection();
  });

    it(`Verify title and label exist `, () => {
      locationsSection.validateTitle();
      locationsSection.validateLabel();
    });

    it(`Verify hover actions `, () => {
       locationsSection.validateHoverInOptions();
    });

    it(`Verify click actions `, () => {
      locationsSection.validateClickInOptions();
    });

});
