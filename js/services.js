const SHOW_TAB = 'show-tab';
const ACTIVE = 'active';
const TAB_CONTENT = 'tabcontent';
const tabLinks = document.querySelectorAll('.tablink');
const tabcontent = document.querySelectorAll('.tabcontent');

for (const tabLink of tabLinks) {
  tabLink.addEventListener('click', showTab);
}

function showTab(evt) {
  const tabNumber = evt.target.dataset.tab;
  for (const link of tabLinks) {
    link.classList.remove(ACTIVE)
  }
  for (const content of tabcontent) {
    content.classList.remove(SHOW_TAB)
  }

  evt.target.classList.add(ACTIVE);
  document.getElementById(`${TAB_CONTENT}${tabNumber}`).classList.add(SHOW_TAB);

}