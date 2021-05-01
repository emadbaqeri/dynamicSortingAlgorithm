import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

const characters = new CharactersCollection("something here as test");
characters.sort();
console.log(characters.data);
