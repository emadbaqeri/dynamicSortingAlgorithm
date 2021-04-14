import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([10, 3, -5, -1]);
// const characterCollection = new CharactersCollection("something here as test");
// const sorter = new Sorter(numbersCollection);
// const charSorter = new Sorter(characterCollection);

// sorter.sort();
// charSorter.sort();

// console.log("charactersCollection OUTPUT->", characterCollection.data);

// console.log("OUTPUT -> ", numbersCollection.data);

const linkedList = new LinkedList();
linkedList.add(11123);
linkedList.add(23);
linkedList.add(500);
linkedList.add(-12);
linkedList.add(0);
linkedList.add(78);
linkedList.add(-123);
linkedList.add(1230);

const sorter = new Sorter(linkedList);
sorter.sort();

linkedList.print();
