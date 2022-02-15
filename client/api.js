import request from 'superagent'

const taskRouteURL = '/api/v1/tasks/'


export function getAllTasksFromDB () {
  return request
    .get(taskRouteURL)
    .then(res => res.body)
}

export function addTaskToDB (newTask) {
console.log(newTask)
  return request
  .post(taskRouteURL)
  .send(newTask)
  .then(res => res.body)
}