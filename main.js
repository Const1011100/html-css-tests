import { htmlTagsData } from './data/data.js';
import { renderQuizCards } from './components/renderQuizCards.js';
import { navigation } from './components/navigation.js';

let tags = [...htmlTagsData];
const app = document.getElementById('app');
const button = navigation();
let counter = 0;
let limit = 4;

function start() {
  if (tags.length === 0) {
    console.log('Усі теги використані!');
    return;
  }
  if (counter === limit) {
    return (app.innerHTML = `
    <h2>Test finished!</h2>
    <button>Restart</button>
    `);
  }
  const result = renderQuizCards(tags);
  app.innerHTML = '';
  app.append(result.wrapper, button);

  const index = tags.indexOf(result.targetTag);
  tags.splice(index, 1);
  counter++;
}

button.addEventListener('click', start);
app.append(button);
