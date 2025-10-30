import { shuffleArray } from '../utils/helpers.js';
import { createQuestionCard } from './createQuestionCard.js';

// функція яка рендерить всі картки тестів
export function renderQuizCards(tagList) {
  const wrapper = document.createElement('div');
  let listOfTagsInRandomOrder = shuffleArray([...tagList]);

  const selectedTags = listOfTagsInRandomOrder.slice(0, 4);
  const tagSelectedForQuestion = selectedTags[0];
  const card = createQuestionCard(selectedTags, tagSelectedForQuestion);
  wrapper.append(card);

  const targetTag = selectedTags[0];

  return { wrapper, targetTag };
}
