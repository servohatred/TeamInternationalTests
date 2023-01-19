class Selectors {
  static readonly TITLE = 'h2[class*="white-text"]';
  static readonly LABEL = 'p[class*="white-text"]';
  static readonly SECTION = 'section[data-anchor="career"]';
  static readonly FIRST_NAME = 'input[data-id="firstName"]';
  static readonly LAST_NAME = 'input[data-id="lastName"]';
  static readonly COMPANY = 'input[data-id="company"]';
  static readonly EMAIL = 'input[data-id="email"]';
  static readonly PHONE = 'input[data-id="phone"]';
  static readonly MESSAGE = 'input[data-id="message"]';
  static readonly CHECKBOXES = 'input[type="checkbox"]';
  static readonly SUBMIT = 'input[class="submit-button"]';
}

export default class ContactComponent {
  validateTitle() {
    cy.get(Selectors.SECTION).find(Selectors.TITLE).should("be.visible");
  }
  validateLabel() {
    cy.get(Selectors.SECTION).find(Selectors.LABEL).should("be.visible");
  }
  fillOutForm() {
    cy.wait(2000)
    this.getFormIframe()
      .find(Selectors.FIRST_NAME)
      .should("be.visible")
      .type("TestFirstName");
    this.getFormIframe()
      .find(Selectors.LAST_NAME)
      .should("be.visible")
      .type("TestLastName");
    this.getFormIframe()
      .find(Selectors.COMPANY)
      .should("be.visible")
      .type("TestCompany");
    this.getFormIframe()
      .find(Selectors.EMAIL)
      .should("be.visible")
      .type("Test@mail.com");
    this.getFormIframe()
    this.getFormIframe()
      .find(Selectors.PHONE)
      .should("be.visible")
      .type("11111111");
    this.getFormIframe()
      .find(Selectors.MESSAGE)
      .should("be.visible")
      .type("TestMessage");
  }
  acceptTermsAndPolicies() {
    this.getFormIframe()
      .find(Selectors.CHECKBOXES)
      .each((checkbox) => {
        cy.wrap(checkbox).click({force:true});
      });
  }
  submit() {
    //Disabled in Prod
    // this.getFormIframe().find(Selectors.SUBMIT).click();
  }
  private getFormIframe() {
    return cy
      .get('iframe[title="Candidates Form"][class*="entered"]')
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .find('community_layout-section')
      .find('lightning-layout-item');
  }
}
