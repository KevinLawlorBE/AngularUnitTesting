/* tslint:disable:no-unused-variable */
import { QuoteService } from "./quote.service";

describe("QuoteService", () => {
  let service: QuoteService;

  beforeEach(() => {
    service = new QuoteService();
  });

  it("should create service", () => {
    expect(service).toBeTruthy();
  });

});
