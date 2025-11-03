import { renderQuizCards } from './renderQuizCards.js';
import { restart } from './restart.js';
import { _state } from '../data/state.js';

export function start() {
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
