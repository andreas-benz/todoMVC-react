import { SAVE_ALL_TASKS, ADD_TASK, UPDATE_TASK, DEL_TASK } from '../actions'


const initialTaskState = [
  {t_id: 1, 
  title: 'pick up plastic', 
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis lacinia elit fringilla dignissim. Aenean interdum ultricies interdum. Morbi magna ex, pulvinar in facilisis id, rhoncus ac eros. Sed dignissim augue vel nisi ornare iaculis. Maecenas elementum felis vel metus facilisis elementum nec vel quam. Nam erat dui, efficitur at lobortis quis, blandit sed justo. Sed ultricies urna sem, quis aliquet metus vehicula placerat.',
  priority: 'high',
  category: "daily",
  status: "in progress",
  expiry: "2018-11-29T00:00:00.000Z",
  created_at: "2018-11-29T00:00:00.000Z",
  created_by: 10002,
  },
  {
  t_id: 2, 
  title: 'Wash the dishes', 
  description: 'Integer molestie, lectus sit amet pellentesque maximus, odio tortor suscipit justo, eu porttitor mi nunc scelerisque elit. Nunc et nibh erat. Aenean semper bibendum orci, quis scelerisque justo malesuada at. Vestibulum commodo ex at massa finibus semper. Phasellus metus dui, placerat in nulla ut, convallis venenatis magna. Donec finibus molestie ligula, eu porta nisi maximus a. Cras tincidunt imperdiet purus, vel lacinia augue lacinia eu.',
  priority: 'high',
  category: "daily",
  status: "in progress",
  expiry: "2018-11-29T00:00:00.000Z",
  created_at: "2018-11-29T00:00:00.000Z",
  created_by: 10002,
  }]


function taskReducer (state = initialTaskState, action) {
  
  switch (action.type) {

    case SAVE_ALL_TASKS:
      return action.tasks

    case ADD_TASK:
      const allIds = state.map(task => task.id)
      const maxId = Math.max(...allIds)
      return [ ...state, { id: maxId + 1, name: action.newTask } ]

    case UPDATE_TASK:
      state.forEach(task => {
        if (task.id === action.id) {
          task.name = action.newTask
        }
      })
      return [...state]

    case DEL_TASK:
      return state.filter(task => task.id !== action.taskId)

    default:
      return state
  }
}

export default taskReducer
