import React, { useState } from "react";
import Persons from './Persons';
import Filter from './Filter';
import PersonFrom from './PersonForm';

const App = () => {
  const [persons, setPersons] = useState([  { name: 'Arto Hellas', number: '040-123456' },
  { name: 'Ada Lovelace', number: '39-44-5323523' },
  { name: 'Dan Abramov', number: '12-43-234345' },
  { name: 'Mary Poppendieck', number: '39-23-6423122' }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setNewFilter] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  
  };

  const handleNumberInput = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);

  }

  const addPerson = (event) => {
    event.preventDefault();
/*
    persons.forEach(function(person, index){
        if(person.name === newName){
            alert(`${newName} is already added to phonebook`)
        }
        console.log(person.name, index)
    })
*/
    if (persons.some(persons => persons.name === newName)){
        alert(`${newName} is already added to phonebook`)
    } else {

    const personObject = {
        name: newName,
        number: newNumber
      };
      setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  }
}

const handleFilter= (event) => {
    console.log(event.target.value);
    setNewFilter(event.target.value)
}



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue = {filterValue} handleFilter = {handleFilter}/>
      <h2>Add a new person</h2>
        <PersonFrom addPerson = {addPerson}
                    newName = {newName} handleChange = {handleChange} 
                    newNumber = {newNumber} handleNumberInput = {handleNumberInput}
        />
      <h2>Numbers</h2>
      <Persons  person = {persons} filterValue = {filterValue}/>
    </div>
  );
};

export default App;
