import CareerComponent from "./career-component.po";
import ClientsComponent from "./clients-component.po";
import ContactComponent from "./contact-component.po";
import EducationComponent from "./education-component.po";
import LocationsComponent from "./locations-component.po";
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
  private readonly _locationsSection:LocationsComponent ;
  private readonly _educationSection:EducationComponent ;
  private readonly _careerSection:CareerComponent ;
  private readonly _contactSection:ContactComponent ;

  constructor() {
    cy.visit(this.url)
    this._solutionsSection= new SolutionsComponent();
    this._servicesSection= new ServicesComponent();
    this._clientsSection= new ClientsComponent();
    this._locationsSection= new LocationsComponent();
    this._educationSection= new EducationComponent();
    this._careerSection= new CareerComponent();
    this._contactSection= new ContactComponent();
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

  goToLocationsSection():LocationsComponent{
    cy.get(Selectors.LOCATIONS_BUTTON).click();
    return this._locationsSection
  }

  goToEducationSection():EducationComponent{
    cy.get(Selectors.EDUCATION_BUTTON).click();
    return this._educationSection
  }

  goToCareerSection():CareerComponent{
    cy.get(Selectors.CAREER_BUTTON).click();
    return this._careerSection
  }

  goToContactSection():ContactComponent{
    cy.get(Selectors.CONTACT_US_BUTTON).click();
    return this._contactSection
  }

}
