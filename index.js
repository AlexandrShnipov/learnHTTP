const imagesWrap = document.querySelector('[data--imagesWrap]');
const button = document.querySelector('[data--button]');
const input = document.querySelector('[data--input]');


//!images
const onImagesReceived = (data) => {
  data.forEach(el => {
    const img = document.createElement('img');
    img.src = el.thumbnail;
    //document.querySelector('body').appendChild(img);
    imagesWrap.appendChild(img)
  });
}


button.addEventListener('click', () => {
  const promise = getImages(input.value);
  promise.then(onImagesReceived)
})


//!tasks
const buttonTasks = document.querySelector('[ data--buttonTasks]');
const tasksList = document.querySelector('[data--taskResult]');
const buttonCreateTask = document.querySelector('[data--buttonCreateTask]');
const buttonDeleteTask = document.querySelector('[data--buttonDeleteTask]');
const buttonUpdateTask = document.querySelector('[data--buttonUpdateTask]');

const onTasksReceived = (tasks) => {
  tasksList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = task.title;
    //document.querySelector('body').appendChild(img);
    tasksList.appendChild(li)
  });
};

buttonTasks.addEventListener('click', () => {
  const promise = getTasks();
  promise.then(onTasksReceived)
});

buttonCreateTask.addEventListener('click', () => {
  createTask('learn React').then((data) => {
    console.log(data)
  })
});

buttonDeleteTask.addEventListener('click', () => {
  deleteTask("c91d8307-1fbe-4eb8-a7bb-8b98f722d419").then((data) => {
    console.log(data)
  })
});

buttonUpdateTask.addEventListener('click', () => {
  updateTask('8192efc4-b217-4de9-a1c0-2bc65baf3e35','learn Svelte').then((data) => {
    console.log(data)
  })
});

