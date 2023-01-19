import HomePage from "./page-objects/home-page.po";
import LocationsComponent from "./page-objects/locations-component.po";

describe("Team International Landing Page - Tests for Locations section", () => {
  let homePage : HomePage
  let locationsSection : LocationsComponent
  beforeEach(() => {
    homePage = new HomePage();
    locationsSection = homePage.goToLocationsSection();
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
