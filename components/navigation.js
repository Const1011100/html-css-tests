export function navigation(title = 'Button') {
  const btn = document.createElement('button');
  btn.textContent = `${title}`;
  btn.classList.add('btn');
  return btn;
}
