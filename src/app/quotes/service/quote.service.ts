import { Injectable } from "@angular/core";
import { QuoteModel } from "../model/QuoteModel";

@Injectable({
  providedIn: "root"
})
export class QuoteService {
  public quoteList: QuoteModel[] = [];  

  constructor() {}

  addNewQuote(quote: String) {
    const date = new Date();        
    const year = date.getFullYear();
    this.quoteList.push(
      new QuoteModel(quote, `${year}`)
    );
  }

  getQuote() {
    return this.quoteList;
  }

  removeQuote(index: number) {
    this.quoteList.splice(index, 1);
  }

  fetchQuotesFromServer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([new QuoteModel("I love unit testing", "2018")]);
      }, 2000);
    });
  }
}
