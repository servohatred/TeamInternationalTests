class Selectors {
  static readonly TITLE = 'h2[class*="white-text"]';
  static readonly LABEL = 'p[class*="white-text"]';
  static readonly SECTION = 'section[data-anchor="career"]';
  static readonly MORE_BUTTON = '[class*="bnr-career-link"]';
}

export default class CareerComponent {
  validateTitle() {
    cy.get(Selectors.SECTION).find(Selectors.TITLE).should("be.visible");
  }
  validateLabel() {
    cy.get(Selectors.SECTION).find(Selectors.LABEL).should("be.visible");
  }
  validateClickInOptions() {
    cy.get(Selectors.MORE_BUTTON)
      .should("be.visible")
      .should("have.attr", "href");
  }
}
