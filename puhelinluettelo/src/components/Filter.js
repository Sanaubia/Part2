import React from 'react'

const Filter = (props)  => {

    return(
    <div>
    Filter contacts: <input value = {props.filterValue} onChange = {props.handleFilter}></input>
</div>
)
}

export default Filter