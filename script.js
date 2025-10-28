import { tags } from './data.js';

const app = document.getElementById('app');

// Функція рандомного сортування масиву
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

// функція яка рендерить всі картки тестів
function showQuestions(tags, n) {
  const wrapper = document.createElement('div');
  let listOfTagsInRandomOrder = shuffle([...tags]);

  for (let i = 0; i < n; i++) {
    const selectedTags = listOfTagsInRandomOrder.slice(0, 4);
    const tagSelectedForQuestion = selectedTags[0];
    const card = showQuestion(selectedTags, tagSelectedForQuestion);
    wrapper.append(card);

    const index = listOfTagsInRandomOrder.indexOf(selectedTags[0]);
    listOfTagsInRandomOrder.splice(index, 1);
  }

  return wrapper;
}

// функція яка рендерить одну картку з тесту
function showQuestion(tagList, selectedTag) {
  const container = document.createElement('div');
  const question = document.createElement('h2');
  const listOfAnswers = document.createElement('ul');

  question.textContent = selectedTag.desc;

  shuffle(tagList).forEach((tag) => {
    const item = document.createElement('li');
    item.textContent = tag.tag;
    listOfAnswers.append(item);
  });

  container.append(question, listOfAnswers);

  listOfAnswers.addEventListener('click', (event) => {
    checkAnswer(event, selectedTag.tag);
  });

  return container;
}

// функція перевірки правильності відповіді
function checkAnswer(event, correctTag) {
  if (event.target.tagName !== 'LI') return;

  const chosen = event.target;
  const answers = event.currentTarget.querySelectorAll('li');
  answers.forEach((li) => (li.style.pointerEvents = 'none'));

  if (chosen.textContent === correctTag) {
    chosen.classList.add('green');
  } else {
    chosen.classList.add('red');
    const correctItem = [...answers].find(
      (li) => li.textContent === correctTag
    );
    if (correctItem) correctItem.classList.add('green');
  }
}

app.append(showQuestions(tags, 5));
