enterPressed = event => {
  let key = event.keyCode;
  if (key === 13) {
    addItemTodo();
  }
};

removeTask = event => {
  let parent = event.path[3];
  let taskCard = event.path[2];
  parent.removeChild(taskCard);
};

moveToDone = event => {
  let doneButton = event.path[0];
  let buttonParent = event.path[1];
  let taskCard = event.path[2];
  let taskCardParent = event.path[3];

  let target = taskCardParent.id === 'todo' ? document.getElementById('done') : document.getElementById('todo');

  buttonParent.removeChild(doneButton);
  taskCardParent.removeChild(taskCard);
  target.appendChild(taskCard);
};

getText = () => {
  let inputValue = document.getElementById('item').value;
  return inputValue;
};

addItemTodo = () => {
  let text = getText();

  if (!text) {
    //If text value is empty show alert box and do not add empty task
    alert('Nie podano zadania!');
    return;
  }

  //Creating components
  let item = document.createElement('div');
  let textBlock = document.createElement('div');
  let buttons = document.createElement('div');
  let remove = document.createElement('button');
  let done = document.createElement('button');

  //Adding classes, values and behaviour
  item.classList.add('container');
  item.classList.add('taskCard');

  textBlock.innerText = text;
  textBlock.classList.add('textBlock');

  buttons.classList.add('container');

  remove.classList.add('removeButton');
  remove.innerText = 'remove';
  remove.addEventListener('click', removeTask);

  done.classList.add('doneButton');
  done.innerText = 'done';
  done.addEventListener('click', moveToDone);

  //Components combine
  buttons.appendChild(remove);
  buttons.appendChild(done);

  item.appendChild(textBlock);
  item.appendChild(buttons);

  //Push new item
  document.getElementById('todo').appendChild(item);
  //Clear input value
  document.getElementById('item').value = '';
};

document.getElementById('add').addEventListener('click', addItemTodo);
document.getElementById('item').addEventListener('keydown', enterPressed);
