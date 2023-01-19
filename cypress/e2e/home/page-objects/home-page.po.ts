import ClientsComponent from "./clients-component.po";
import ServicesComponent from "./services-component.po";
import SolutionsComponent from "./solutions-component.po";

class Selectors {
  static readonly INDUSTRY_BUTTON = 'a[href="#industry"]';
  static readonly SERVICES_BUTTON = 'a[href="#services"]';
  static readonly CLIENTS_BUTTON = 'a[href="#clients"]';
  static readonly LOCATIONS_BUTTON = 'a[href="#locations"]';
  static readonly EDUCATION_BUTTON = 'a[href="#education"]';
  static readonly CAREER_BUTTON = 'a[href="#career"]';
  static readonly CONTACT_US_BUTTON = 'a[href="#contact-us"]';
}

export default class HomePage {
  private readonly _url = "https://www.teaminternational.com";
  private readonly _solutionsSection:SolutionsComponent ;
  private readonly _servicesSection:ServicesComponent ;
  private readonly _clientsSection:ClientsComponent ;

  constructor() {
    cy.visit(this.url)
    this._solutionsSection= new SolutionsComponent();
    this._servicesSection= new ServicesComponent();
    this._clientsSection= new ClientsComponent();
  }
  get url(): string {
    return this._url;
  }

  goToSolutionsSection():SolutionsComponent{
    cy.get(Selectors.INDUSTRY_BUTTON).click();
    return this._solutionsSection
  }

  goToServicesSection():ServicesComponent{
    cy.get(Selectors.SERVICES_BUTTON).click();
    return this._servicesSection
  }

  goToClientsSection():ClientsComponent{
    cy.get(Selectors.CLIENTS_BUTTON).click();
    return this._clientsSection
  }

}
