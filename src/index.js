
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form'); // Update selector
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(form['new-task-description'].value); // Update to use correct ID
    form.reset();
  });
});


function buildToDo (todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handDelete);
  btn.textContent = 'x';
  p.textContent = `${todo}`;
  p.appendChild(btn);
  console.log(p);
  document.querySelector('#list ul').appendChild(p); // Update selector
}


function handDelete(e) {
  e.target.parentNode.remove();
}
