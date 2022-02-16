import React, {useState} from 'react'; 
import { useSelector } from 'react-redux'


function Task (props) {
  //could I identify .this record via target.value or something and not via props?
  const task = props.props
  const t_id = task.t_id

  const [checked, setChecked] = useState(false);
  const handleChange = () => { 
    
  setChecked(!checked);
  //write to DB onChange --> updateDB. If checked = true then wirte 'completed' else write 'created'
}; 

return (
    <>
      <li className={checked ? 'completed' : 'in progress'}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={checked ? true : false} onChange={handleChange}/>
          <label>{task.title}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Create a TodoMVC template" />
      </li>
    </>
  )
}

export default Task


/*
These are here just to show the structure of the list items
List items should get the class `editing` when editing and `completed` when marked as completed

checked={checked ? 'Checked' : 'Not checked'}

  {/*<Fruit key={oneFruit.id} fruit={oneFruit} />)}
  <li className="completed">
  <div className="view">
  <input className="toggle" type="checkbox" />
  <label>Buy a unicorn</label>
  <button className="destroy"></button>
  </div>
  <input className="edit" value="Rule the web" />
  </li>

  */