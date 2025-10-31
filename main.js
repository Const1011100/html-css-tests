import { htmlTagsData } from './data/data.js';
import { renderQuizCards } from './components/renderQuizCards.js';
import { navigation } from './components/navigation.js';
import { _state } from './data/state.js';

let tags = [...htmlTagsData];
const app = document.getElementById('app');
const button = navigation();
const startMenu = menu();
let counter = 0;
let limit = 0;

function menu() {
  const wrapper = document.createElement('div');

  const btnLimit5 = navigation(5);
  btnLimit5.addEventListener('click', () => {
    limit = 5;
    app.innerHTML = '';
    app.append(button);
  });
  const btnLimit10 = navigation(10);
  btnLimit10.addEventListener('click', () => {
    limit = 10;
    app.innerHTML = '';
    app.append(button);
  });

  wrapper.append(btnLimit5, btnLimit10);
  return wrapper;
}

function start() {
  if (tags.length === 0) {
    console.log('Усі теги використані!');
    return;
  }
  if (counter === limit) {
    console.log(_state.result);

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
app.append(startMenu);
