import { _state } from '../data/state.js';

// створюємо меню для обрання кількості питань в тесті
function createQuestionCountSelect() {
  const select = document.createElement('select');
  const options = ['Обрати кількість питань', 5, 10, 25];
  options.forEach((optionValue) => {
    const option = document.createElement('option');
    option.textContent = optionValue;
    select.append(option);
  });
  return select;
}

// задати значення questionCount
function setQuestionCount(targetElement) {
  targetElement.addEventListener('change', function (event) {
    if (!event.target.matches('select')) return;

    const selectValue = Number(event.target.value);

    if (event.target.matches('select')) {
      if (!selectValue) {
        alert('Оберіть кількість питань!');
        return;
      }

      _state.questionCount = selectValue;
      console.log('Кількість питань:', _state.questionCount);
    }
  });
}

export function createStartMenu(theApp) {
  theApp.append(createQuestionCountSelect());
  setQuestionCount(theApp);
}
