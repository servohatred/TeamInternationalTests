import { eq } from "cypress/types/lodash";

class Selectors {
  static readonly TITLE = 'h2[class*="white-text"]';
  static readonly LABEL = 'p[class*="white-text"]';
  static readonly SECTION = 'section[data-anchor="services"]';
  static readonly OPTIONS = '[class*="service-item"]';
  static readonly OPTION_DESCRIPTION = '[class*="description-service"]';
  static readonly OPTION_BUTTON = '[class*="services-st"]';
  static readonly OPTION_TITLE = '[class*="service-name"]';
}

export default class ServicesComponent {

  validateTitle() {
    cy.get(Selectors.SECTION).find(Selectors.TITLE).should("be.visible");
  }
  validateLabel() {
    cy.get(Selectors.SECTION).find(Selectors.LABEL).should("be.visible");
  }
  validateHoverInOptions() {
    cy.get(Selectors.OPTIONS)
    .filter((_, el) => el.innerText.trim() != "")
    .each((option) => {
      cy.wrap(option).find(Selectors.OPTION_TITLE).should("be.visible");
      cy.wrap(option)
        .find(Selectors.OPTION_DESCRIPTION)
        .should("not.be.visible");
      cy.wrap(option).realHover();
      cy.wrap(option).find(Selectors.OPTION_DESCRIPTION).should("be.visible");
      cy.wrap(option).find(Selectors.OPTION_BUTTON).should("be.visible");
      cy.wrap(option).find(Selectors.OPTION_TITLE).should("not.be.visible");
    });
  }
  validateClickInOptions() {
    cy.get(Selectors.OPTIONS)
    .filter((_, el) => el.innerText.trim() != "")
    .each((option) => {
       cy.wrap(option).find('a').should('have.attr', 'href');
    });
  }
}
