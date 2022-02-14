const knex = require('knex')
const config = require('./knexfile').development
const conn = knex(config)

function getAllTasks (database = conn) {
    return database('tasks')
      .select()
      .leftJoin('users', 'created_by', 'users.u_id')
  }

function getTask(id, database = conn) {
  return database('tasks')
    .select()
    .where('t_id', id) //returns all entries where ids match
    .first() //returns only one entry
}

function deleteTask (id, database = conn) {
  return database('tasks')
    .where('t_id', id)
    .del()
}

function updateTask (taskToUpdate, database = conn) {
  const t_id = taskToUpdate.t_id
  return database('tasks')
    .where('t_id', t_id)
    .update(taskToUpdate)
}

function addTask (obj, database = conn) {
  return database('tasks')
    .insert(obj)
}

function getAllUsers (database = conn) {
  return database('users')
    .select()
}

//NOT IN USE RIGHT NOW
// function getAllTasksThatAreNotMine (uid, database = conn) {
//   return database('tasks')
//     .select('t_id', 'created_by', "name")
//       .join('user_task', 't_id', 'user_task.tid')
//       .join('users', 'uid', 'users.u_id')
//       .whereNot('tasks.created_by', uid)
//       .whereNot('user_task.uid', uid)
// }

// function tasksIhaveCreated (uid, database = conn) {
//   return database('tasks')
//     .select()
//       .where("created_by", uid)
// }

module.exports = {
 getAllTasks,
 getTask,
 deleteTask,
 updateTask,
 addTask,
 getAllUsers,
 
//  getAllTasksThatAreNotMine,
//  tasksIhaveCreated,
//  destroyConnection,
}