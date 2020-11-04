const addTask = document.querySelector('.add');
const list = document.querySelector('.todos');

const createTodoList = task => {
  // HTML テンプレートを生成
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${task}</span>
      <i class="far fa-trash-alt delete"></i>
  </li>
  `;

  list.innerHTML += html;
}