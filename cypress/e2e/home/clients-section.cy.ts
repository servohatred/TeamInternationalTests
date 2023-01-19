import ClientsComponent from "./page-objects/clients-component.po";
import HomePage from "./page-objects/home-page.po";

describe("Team International Landing Page - Tests for Clients section", () => {
  let homePage : HomePage
  let clientsSection : ClientsComponent
  beforeEach(() => {
    homePage = new HomePage();
    clientsSection = homePage.goToClientsSection();
  });
    // { sectionName: "Locations" },
    // { sectionName: "Top Gun Lab" },
    // { sectionName: "Empower Your Career" },

    it(`Verify solution title exist `, () => {
      clientsSection.validateTitle();
    });

    it(`Verify hover actions `, () => {
       clientsSection.validateHoverInOptions();
    });

});
