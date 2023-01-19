class Selectors {
  static readonly TITLE = 'h2[class*="white-text"]';
  static readonly LABEL = 'p[class*="white-text"]';
  static readonly SECTION = 'section[data-anchor="locations"]';
  static readonly OPTIONS = '[class*="location-item"]';
  static readonly CURRENT_OPTION =
    '[class*="location-item"][class*="slick-current"]';
  static readonly OPTION_BUTTON = '[class*="bottom-block"]';
  static readonly NEXT_BUTTON = '[class*="arrow-btn"][class*="next"]';
  static readonly OPTION_TITLE = "h3";
}

export default class LocationsComponent {
  validateTitle() {
    cy.get(Selectors.SECTION).find(Selectors.TITLE).should("be.visible");
  }
  validateLabel() {
    cy.get(Selectors.SECTION).find(Selectors.LABEL).should("be.visible");
  }
  validateHoverInOptions() {
    cy.get(Selectors.OPTIONS)
      .filter((_, el) => !el.className.includes('slick-cloned'))
      .each((_) => {
        cy.get(Selectors.CURRENT_OPTION)
          .find("a")
          .realHover()
          .should("not.have.css", "color", "#243747")
          .should("not.have.css", "box-shadow", "0 10px 20px #36a1ff66");
        cy.get(Selectors.NEXT_BUTTON).click({ force: true });
      });
  }
  validateClickInOptions() {
    cy.get(Selectors.OPTIONS)
      .filter((_, el) => !el.className.includes('slick-cloned'))
      .each((_) => {
        cy.get(Selectors.CURRENT_OPTION)
          .find("a").should("have.attr", "href");
          cy.get(Selectors.NEXT_BUTTON).click({ force: true })
          .wait(1000);
      });
  }
}
