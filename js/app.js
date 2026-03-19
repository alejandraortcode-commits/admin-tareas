const input = document.querySelector('input');
const button = document.querySelector('button');
const tasks = document.querySelector('ul');

button.addEventListener('click', () => {
    const task = input.value;
    const li = document.createElement('li');
    li.textContent = task;
    tasks.appendChild(li);
    input.value = '';
});

function addTask() {
    const task = input.value;
    const li = document.createElement('li');
    li.textContent = task;
    tasks.appendChild(li);
    input.value = '';
}

