import { Item } from "./Search";

export interface RepositoryForDisplay extends Pick<Item, "id" | "name"> {
  owner: string;
}
