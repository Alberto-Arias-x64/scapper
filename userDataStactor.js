const users = document.querySelectorAll('.reusable-search__result-container')
const usersList = []
users.forEach(user => {
  const data = user.querySelector('.entity-result__title-text')
  const url = data.querySelector('.app-aware-link').href
  const name = data.querySelector('.app-aware-link').textContent
  const bio = user.querySelector('.entity-result__primary-subtitle').textContent
  usersList.push({name, url, bio})
})

const downloadJSON = (data, filename) => {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${filename}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

downloadJSON(usersList, 'usersList');