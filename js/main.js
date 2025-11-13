import { htmlTagsData } from './data/htmlTagsData.js';
import { _state } from './data/state.js';
import { shuffle } from './utils/shuffle.js';
import { createStartMenu } from './components/menu.js';

const app = document.getElementById('app');
createStartMenu(app);

_state.tags = shuffle(htmlTagsData);
_state.questionCount = 5;

const newArray = _state.tags.slice(0, _state.questionCount);

console.log(newArray);

// функція генерації масиву для формування одного тесту
function generateChoices(correctTag, allTags) {
  const wrongTags = shuffle(
    allTags.filter((t) => {
      return t.tag !== correctTag;
    })
  ).slice(0, 3);

  return shuffle([correctTag, ...wrongTags.map((t) => t.tag)]);
}
console.log(generateChoices('nav', htmlTagsData));
