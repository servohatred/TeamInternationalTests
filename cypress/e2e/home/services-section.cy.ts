import HomePage from "./page-objects/home-page.po";
import ServicesComponent from "./page-objects/services-component.po";

describe("Team International Landing Page - Tests for Services section", () => {
  let homePage : HomePage
  let servicesSection : ServicesComponent
  beforeEach(() => {
    homePage = new HomePage();
    servicesSection = homePage.goToServicesSection();
  });

    it(`Verify solution title and label exist `, () => {
      servicesSection.validateTitle();
      servicesSection.validateLabel();
    });

    it(`Verify hover actions `, () => {
       servicesSection.validateHoverInOptions();
    });

    it(`Verify click actions `, () => {
      servicesSection.validateClickInOptions();
    });

});
