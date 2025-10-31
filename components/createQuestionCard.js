import { shuffleArray } from '../utils/helpers.js';
import { _state } from '../data/state.js';

// функція яка рендерить одну картку з тесту
export function createQuestionCard(tagList, selectedTag) {
  const container = document.createElement('div');
  const question = document.createElement('h2');
  const listOfAnswers = document.createElement('ul');

  question.textContent = selectedTag.desc;

  shuffleArray(tagList).forEach((tag) => {
    const item = document.createElement('li');
    item.textContent = tag.tag;
    listOfAnswers.append(item);
  });

  container.append(question, listOfAnswers);

  listOfAnswers.addEventListener('click', (event) => {
    handleAnswerSelection(event, selectedTag.tag);
  });

  return container;
}

// функція перевірки правильності відповіді
function handleAnswerSelection(event, correctTag) {
  if (event.target.tagName !== 'LI') return;

  const chosen = event.target;
  const answers = event.currentTarget.querySelectorAll('li');
  answers.forEach((li) => (li.style.pointerEvents = 'none'));

  if (chosen.textContent === correctTag) {
    chosen.classList.add('green');
    _state.result.push('+');
  } else {
    chosen.classList.add('red');
    _state.result.push('-');
    const correctItem = [...answers].find(
      (li) => li.textContent === correctTag
    );
    if (correctItem) correctItem.classList.add('green');
  }
}
