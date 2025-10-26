import { tags } from './data.js';

const app = document.getElementById('app');

const listOfTagsInTandomRrder = shuffle(tags);
const fourTags = listOfTagsInTandomRrder.slice(0, 4);

app.append(showQuestion(fourTags));

// Функція рандомного сортування масиву
function shuffle(array) {
  return [...array].sort(() => {
    return Math.random() - 0.5;
  });
}

function showQuestion(tagList) {
  const container = document.createElement('div');
  const question = document.createElement('h2');
  const listOfAnswers = document.createElement('ul');

  tagList.forEach((tag) => {
    const item = document.createElement('li');
    item.textContent = tag.tag;
    listOfAnswers.append(item);
  });
  question.textContent = tagList[0].desc;

  container.append(question, listOfAnswers);

  listOfAnswers.addEventListener('click', (event) => {
    checkAnswer(event, tagList);
  });

  return container;
}

function checkAnswer(event, tagList) {
  if (event.target.tagName === 'LI') {
    if (event.target.textContent === tagList[0].tag) {
      console.log('✅ Correct!');
    } else {
      console.log('❌ Wrong!');
    }
  }
}

/*
5. Логіка програми (JS-план)
Ініціалізація:
Отримати кількість тестів, яку обрав користувач.
Випадково вибрати потрібну кількість тегів з бази.
Генерація тесту:
Для кожного опису згенерувати 4 варіанти (1 правильний + 3 випадкових).
Обробка відповіді:
Перевірити, чи правильна.
Підсвітити результат.
Заблокувати варіанти після вибору.
Перехід до наступного питання.
Підрахунок правильних відповідей.
Показ фінального результату + кнопка “Пройти знову”.
*/
