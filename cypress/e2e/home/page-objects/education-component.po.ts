import { each } from "cypress/types/bluebird";

class Selectors {
  static readonly TITLE = 'h2[class*="white-text"]';
  static readonly LABEL = 'p[class*="white-text"]';
  static readonly SECTION = 'section[data-anchor="education"]';
  static readonly OPTIONS = '[class*="course-item"]';
  static readonly OPTION_DESCRIPTION = "p";
  static readonly OPTION_BUTTON = "a";
  static readonly OPTION_TITLE = "h4";
}

export default class EducationComponent {
  validateTitle() {
    cy.get(Selectors.SECTION).find(Selectors.TITLE).should("be.visible");
  }
  validateLabel() {
    cy.get(Selectors.SECTION).find(Selectors.LABEL).should("be.visible");
  }
  validateHoverInOptions() {
    cy.get(Selectors.OPTIONS).then((options) => {
      let notFinished = options.filter(
        (_, el) => !el.className.includes("finished")
      );
      if (notFinished.length > 0) {
        cy.wrap(options).each((option) => {
          cy.wrap(option).realHover();
          cy.wrap(option)
            .find("a")
            .should("not.have.css", "color", "#243747")
            .should("not.have.css", "box-shadow", "0 10px 20px #36a1ff66");
        });
      }
    });
  }
  validateClickInOptions() {
    cy.get(Selectors.OPTIONS).then((options) => {
      let notFinished = options.filter(
        (_, el) => !el.className.includes("finished")
      );
      if (notFinished.length > 0) {
        cy.wrap(options).each((option) => {
          cy.wrap(option).realHover();
          cy.wrap(option).find("a").should("have.attr", "href");
        });
      }
    });
  }
}
