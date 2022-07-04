"use strict";

var imagesWrap = document.querySelector('[data--imagesWrap]');
var button = document.querySelector('[data--button]');
var input = document.querySelector('[data--input]'); //!images

var onImagesReceived = function onImagesReceived(data) {
  data.forEach(function (el) {
    var img = document.createElement('img');
    img.src = el.thumbnail; //document.querySelector('body').appendChild(img);

    imagesWrap.appendChild(img);
  });
};

button.addEventListener('click', function () {
  var promise = getImages(input.value);
  promise.then(onImagesReceived);
}); //!tasks

var buttonTasks = document.querySelector('[ data--buttonTasks]');
var tasksList = document.querySelector('[data--taskResult]');
var buttonCreateTask = document.querySelector('[data--buttonCreateTask]');
var buttonDeleteTask = document.querySelector('[data--buttonDeleteTask]');
var buttonUpdateTask = document.querySelector('[data--buttonUpdateTask]');

var onTasksReceived = function onTasksReceived(tasks) {
  tasksList.innerHTML = '';
  tasks.forEach(function (task) {
    var li = document.createElement('li');
    li.innerHTML = task.title; //document.querySelector('body').appendChild(img);

    tasksList.appendChild(li);
  });
};

buttonTasks.addEventListener('click', function () {
  var promise = getTasks();
  promise.then(onTasksReceived);
});
buttonCreateTask.addEventListener('click', function () {
  createTask('learn React').then(function (data) {
    console.log(data);
  });
});
buttonDeleteTask.addEventListener('click', function () {
  deleteTask("c91d8307-1fbe-4eb8-a7bb-8b98f722d419").then(function (data) {
    console.log(data);
  });
});
buttonUpdateTask.addEventListener('click', function () {
  updateTask('8192efc4-b217-4de9-a1c0-2bc65baf3e35', 'learn Svelte').then(function (data) {
    console.log(data);
  });
});