import request from 'superagent'

const taskRouteURL = '/api/v1/tasks/'

export function getAllTasksFromDB () {
  return request
    .get(taskRouteURL)
    .then(res => res.body)
}

export function addTaskToDB (newTask) {
  return request
  .post(taskRouteURL)
  .send(newTask)
  .then(res => res.body)
}

export function updateTaskInDB (taskToUpdate) {
  return request
  .patch(taskRouteURL)
  .send(taskToUpdate)
  .then(res => res.body)
}

export function deleteTaskInDB (t_id) {
console.log("API here", t_id)
const idAsObj = { t_id: t_id } //needs to be object
  return request
  .delete(taskRouteURL)
  .send(idAsObj)
  .then(res => res.body)
}