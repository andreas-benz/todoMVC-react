import request from 'superagent'

export function getAllTasksFromDB () {
  return request
    .get('/api/v1/tasks')
    .then(res => res.body)
}