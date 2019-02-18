document.getElementById('add').addEventListener('click', addItemTodo);
document.getElementById('item').addEventListener('keydown', enterPressed);

function enterPressed(event) {
  var key = event.keyCode;
  if (key === 13) {
    addItemTodo();
  }
}

function removeTask(e) {
  var parent = e.path[3];
  var taskCard = e.path[2];
  parent.removeChild(taskCard);
}

function moveToDone(e) {
  var doneButton = e.path[0];
  var buttonParent = e.path[1];
  var taskCard = e.path[2];
  var taskCardParent = e.path[3];

  var targer = taskCardParent.id === 'todo' ? document.getElementById('done') : document.getElementById('todo');

  buttonParent.removeChild(doneButton);
  taskCardParent.removeChild(taskCard);
  targer.appendChild(taskCard);
}

function addItemTodo() {
  var input = document.getElementById('item');
  var text = input.value;
  if (text) {
    //Create main element div named item (task card)
    var item = document.createElement('div');
    item.classList.add('container');
    item.classList.add('taskCard');

    //Create container for task text part
    var textBlock = document.createElement('div');
    textBlock.innerText = text;
    textBlock.classList.add('textBlock');

    //Create container for buttons: removeTaskButton and taskDoneButton
    var buttons = document.createElement('div');
    buttons.classList.add('container');

    //Create removeTaskButton
    var remove = document.createElement('button');
    remove.classList.add('removeButton');
    remove.innerText = 'remove';
    remove.addEventListener('click', removeTask);

    //Create taskDoneButton
    var done = document.createElement('button');
    done.classList.add('doneButton');
    done.innerText = 'done';
    done.addEventListener('click', moveToDone);

    //Add buttons into container
    buttons.appendChild(remove);
    buttons.appendChild(done);

    //Add text part into task card
    item.appendChild(textBlock);

    //Add container with buttons into task card
    item.appendChild(buttons);

    //Add task card to lits of tasks to do
    document.getElementById('todo').appendChild(item);
    input.value = '';
  } else {
    //If text value is empty show alert box and do not add empty task
    alert('Nie podano zadania!');
  }
}
