import { htmlTagsData } from './data/data.js';
import { renderQuizCards } from './components/renderQuizCards.js';
import { navigation } from './components/navigation.js';
import { _state } from './data/state.js';

let tags = [...htmlTagsData];
const app = document.getElementById('app');
const button = navigation();
const startMenu = menu();

function menu() {
  const wrapper = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = 'Оберіть кількість питань';

  const btnLimit5 = navigation(5);
  btnLimit5.addEventListener('click', () => {
    _state.questionLimit = 5;
    app.innerHTML = '';
    app.append(button);
  });
  const btnLimit10 = navigation(10);
  btnLimit10.addEventListener('click', () => {
    _state.questionLimit = 10;
    app.innerHTML = '';
    app.append(button);
  });

  wrapper.append(title, btnLimit5, btnLimit10);
  return wrapper;
}

function start() {
  if (tags.length === 0) {
    console.log('Усі теги використані!');
    return;
  }
  if (_state.questionCount === _state.questionLimit) {
    console.log(_state.result);
    app.innerHTML = '';
    return app.append(restart());
  }
  const result = renderQuizCards(tags);
  app.innerHTML = '';
  app.append(result.wrapper, button);

  const index = tags.indexOf(result.targetTag);
  tags.splice(index, 1);
  _state.questionCount++;
}

function restart() {
  const result = _state.correctAnswers;
  const questionLimit = _state.questionLimit;
  const wrapper = document.createElement('div');
  const title = document.createElement('div');
  const btnRestart = document.createElement('button');

  title.textContent = `Правильних відповідей: ${result} з ${questionLimit}`;
  btnRestart.textContent = 'Почати заново';

  btnRestart.addEventListener('click', () => {
    tags = [...htmlTagsData];
    _state.questionLimit = 0;
    _state.questionCount = 0;
    _state.correctAnswers = 0;
    app.innerHTML = '';
    app.append(menu());
  });

  wrapper.append(title, btnRestart);
  return wrapper;
}

button.addEventListener('click', start);
app.append(startMenu);
