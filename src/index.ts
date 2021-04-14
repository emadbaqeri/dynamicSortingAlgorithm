import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharacterCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, -1]);
const characterCollection = new CharactersCollection("something here as test");
const sorter = new Sorter(numbersCollection);
const charSorter = new Sorter(characterCollection);

sorter.sort();
charSorter.sort();

console.log("charactersCollection OUTPUT->", characterCollection.data);

console.log("OUTPUT -> ", numbersCollection.data);
