class Selectors {
  static readonly TITLE = 'h2[class*="white-text"]';
  static readonly SECTION = 'section[data-anchor="clients"]';
  static readonly OPTIONS = '[class*="logo-item"]';
  static readonly OPTION_IMG = "img";
}

export default class ClientsComponent {
  validateTitle() {
    cy.get(Selectors.SECTION).find(Selectors.TITLE).should("be.visible");
  }
  validateHoverInOptions() {
    cy.get(Selectors.OPTIONS).each((option) => {
      cy.wrap(option).find(Selectors.OPTION_IMG).realHover();
      cy.wrap(option)
        .find(Selectors.OPTION_IMG)
        .should("be.visible")
        .and("have.class", "hover")
        .and("have.attr", "src");
    });
  }
}
