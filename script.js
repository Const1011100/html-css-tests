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

  // формуємо питання та список варіантів відповідей
  question.textContent = tagList[0].desc;
  shuffle(tagList).forEach((tag) => {
    const item = document.createElement('li');
    item.textContent = tag.tag;
    listOfAnswers.append(item);
  });

  container.append(question, listOfAnswers);

  // перевіряємо правильність відповіді
  listOfAnswers.addEventListener('click', (event) => {
    checkAnswer(event, tagList);
  });

  return container;
}

function checkAnswer(event, tagList) {
  if (event.target.tagName !== 'LI') return;

  const chosen = event.target;
  const correctTag = tagList[0].tag;
  const answers = event.currentTarget.querySelectorAll('li');

  // Забороняємо клікати повторно
  answers.forEach((li) => (li.style.pointerEvents = 'none'));

  if (chosen.textContent === correctTag) {
    chosen.classList.add('green');
    console.log('✅ Correct!');
  } else {
    chosen.classList.add('red');
    console.log('❌ Wrong!');

    // Підсвічуємо правильну відповідь
    const correctItem = [...answers].find(
      (li) => li.textContent === correctTag
    );
    if (correctItem) correctItem.classList.add('green');
  }
}

// function checkAnswer(event, tagList) {
//   if (event.target.tagName === 'LI') {
//     if (event.target.textContent === tagList[0].tag) {
//       event.target.classList.add('green');
//       console.log('✅ Correct!');
//       console.log(event.target);
//     } else {
//       event.target.classList.add('red');
//       console.log('❌ Wrong!');
//       console.log(event.target);
//     }
//   }
// }

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
