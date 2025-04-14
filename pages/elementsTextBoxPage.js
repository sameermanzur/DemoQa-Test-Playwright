"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementsTextBoxPage = void 0;
const baseurl = "https://demoqa.com/";
class elementsTextBoxPage {
    constructor(page) {
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
    navigate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto("https://demoqa.com/");
            yield this.selectElements.click();
            yield this.selectTextbox.click();
        });
    }
    fillForm(fullName, email, currentAddress, permanentAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fullNameTextbox.fill(fullName);
            yield this.emailTextbox.fill(email);
            yield this.currentAddressTextbox.fill(currentAddress);
            yield this.permanentAddressTextbox.fill(permanentAddress);
            yield this.submitBtn.click();
        });
    }
    validateOutput(name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield expect(this.output).toBeVisible();
            yield expect(this.output.locator("#name")).toContainText(name);
            yield expect(this.output.locator("#email")).toContainText(email);
        });
    }
}
exports.elementsTextBoxPage = elementsTextBoxPage;
