import { SearchQuery } from "./query";

export class Index {
  // TODO add routing
  public searchQuery(): SearchQuery {
    return new SearchQuery();
  }
}