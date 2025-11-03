import { _state } from '../data/state.js';
import { navigation } from './navigation.js';
const button = navigation();

export function menu() {
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
