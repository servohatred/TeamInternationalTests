class Selectors {
  static readonly TITLE = '[class*="main-title-industry"]';
  static readonly LABEL = '[class*="white-text width-industry-section"]';
  static readonly SECTION = 'section[data-anchor="industry"]';
  static readonly OPTIONS = '[class*="industrial-item"]';
  static readonly OPTION_DESCRIPTION = '[class*="industrial-description"]';
  static readonly OPTION_BUTTON = '[class*="industrial-st"]';
  static readonly OPTION_TITLE = "h3";
}

export default class SolutionsComponent {

  validateTitle() {
    cy.get(Selectors.TITLE).should("be.visible");
  }
  validateLabel() {
    cy.get(Selectors.LABEL).should("be.visible");
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
