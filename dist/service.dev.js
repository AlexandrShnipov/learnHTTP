"use strict";

// const getImages = (pageNumber) => {
//   const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
//   return promise;
// }
//axios
var getImages = function getImages(pageNumber) {
  var promise = axios.get("https://repetitora.net/api/JS/Images?page=".concat(pageNumber, "&count=1"));
  return promise.then(function (response) {
    return response.data;
  });
}; // tasks


var getTasks = function getTasks() {
  var promise = axios.get("https://repetitora.net/api/JS/Tasks?widgetId=275495&count=20");
  return promise.then(function (response) {
    return response.data;
  });
};

var createTask = function createTask(title) {
  var promise = axios.post("https://repetitora.net/api/JS/Tasks", {
    widgetId: 275495,
    title: title
  });
  return promise.then(function (response) {
    return response.data;
  });
};

var deleteTask = function deleteTask(id) {
  var promise = axios["delete"]("https://repetitora.net/api/JS/Tasks?widgetId=275495&taskId=".concat(id));
  return promise.then(function (response) {
    return response.data;
  });
};

var updateTask = function updateTask(id, title) {
  var promise = axios.put("https://repetitora.net/api/JS/Tasks", {
    widgetId: 275495,
    taskId: id,
    title: title
  });
  return promise.then(function (response) {
    return response.data;
  });
};