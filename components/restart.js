import { _state } from '../data/state.js';
import { menu } from './menu.js';

export function restart() {
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
