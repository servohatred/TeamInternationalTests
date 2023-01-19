import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  reporter: "cypress-mochawesome-reporter",
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Inline Reporter",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,
});
