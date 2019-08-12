const input = document.querySelector('#item')
const list = document.querySelector('#todo')
const submitButton = document.querySelector('#add')

addItemTodo = (event) => {
  event.preventDefault();

  if (input.value === '') {
    //If text value is empty show alert box and do not add empty task
    alert('Nie podano zadania!');
    return;
  }

  list.innerHTML += `
    <li class="taskCard"> ${input.value} </li>
  `

  //Clear input value
  input.value = '';
};

submitButton.addEventListener('click', addItemTodo);
