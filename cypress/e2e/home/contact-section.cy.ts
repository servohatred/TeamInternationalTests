import ContactComponent from "./page-objects/contact-component.po";
import HomePage from "./page-objects/home-page.po";

describe("Team International Landing Page - Tests for Career section", () => {
  let homePage : HomePage
  let contactSection : ContactComponent
  beforeEach(() => {
    homePage = new HomePage();
    contactSection = homePage.goToContactSection();
  });

    it(`Verify title exist `, () => {
      contactSection.validateTitle();
    });

    it(`Verify description exist `, () => {
      contactSection.validateLabel();
    });

    it(`Verify form actions `, () => {
       contactSection.fillOutForm();
       contactSection.acceptTermsAndPolicies();
       contactSection.submit();
    });

});
