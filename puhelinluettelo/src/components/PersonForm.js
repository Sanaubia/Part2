import React from 'react'


const PersonForm= (props) => {
    console.log(props)
    return(
        <form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newName} onChange={props.handleChange} />
        </div>
        <div>
        number: <input value = {props.newNumber} onChange={props.handleNumberInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm;