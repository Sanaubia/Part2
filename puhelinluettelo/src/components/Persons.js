import React from 'react'

const Persons = (props) => {
    
    console.log(props.person)
    console.log(props.filterValue)
    return(
    props.person.filter(person => person.name.toLocaleLowerCase().includes(props.filterValue.toLocaleLowerCase())).map(filteredName => (
        <div key={filteredName.name}>{filteredName.name} {filteredName.number}</div>
      ))
      )
}




export default Persons