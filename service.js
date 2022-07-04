// const getImages = (pageNumber) => {
//   const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
//   return promise;
// }

//axios

const getImages = (pageNumber) => {
  const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
  return promise.then((response) => {
    return response.data
  });
}

// tasks
const getTasks = () => {
  const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=275495&count=20`);
  return promise.then((response) => {
    return response.data
  });
}

const createTask = (title) => {
  const promise = axios.post
    (`https://repetitora.net/api/JS/Tasks`,
      {
        widgetId: 275495,
        title: title
      }
    );
  return promise.then((response) => {
    return response.data
  });
}

const deleteTask = (id) => {
  const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=275495&taskId=${id}`)
  return promise.then((response) => {
    return response.data
  });
}


const updateTask = (id, title) => {
  const promise = axios.put
    (`https://repetitora.net/api/JS/Tasks`,
      {
        widgetId: 275495,
        taskId: id,
        title: title
      }
    );
  return promise.then((response) => {
    return response.data
  });
}

