import { Locator, Page } from '@playwright/test';

const baseurl = "https://demoqa.com/";

export class elementsTextBoxPage {
    readonly page: Page //Global
    readonly selectElements: Locator;
    readonly selectTextbox: Locator;
    readonly fullNameTextbox: Locator;
    readonly emailTextbox: Locator;
    readonly currentAddressTextbox: Locator;
    readonly permanentAddressTextbox: Locator;
    readonly submitBtn: Locator;
    readonly output: Locator;

    constructor(page: Page) {
        this.page = page;
        this.selectElements = page.locator("//h5[normalize-space()='Elements']");
        this.selectTextbox = page.locator("//span[normalize-space()='Text Box']");
        this.fullNameTextbox = page.locator("#userName");
        this.emailTextbox = page.locator("#userEmail");
        this.currentAddressTextbox = page.locator("#currentAddress");
        this.permanentAddressTextbox = page.locator("#permanentAddress");
        this.submitBtn = page.locator("#submit");
        this.output = page.locator("#output");
    }

    async navigate() {
        await this.page.goto("https://demoqa.com/");
        await this.selectElements.click();
        await this.selectTextbox.click();
    }
    async fillForm(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
        await this.fullNameTextbox.fill(fullName);
        await this.emailTextbox.fill(email);
        await this.currentAddressTextbox.fill(currentAddress);
        await this.permanentAddressTextbox.fill(permanentAddress);
        await this.submitBtn.click();
    }

    async validateOutput(name: string, email: string) {
        await expect(this.output).toBeVisible();
        await expect(this.output.locator("#name")).toContainText(name);
        await expect(this.output.locator("#email")).toContainText(email);
    }
}


