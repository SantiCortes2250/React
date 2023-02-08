import React from 'react'
import Cost from './Cost'
import PropTypes from 'prop-types'


const List = ({costs}) => (
    <div className='gastos-realizados'>
        <h2>List</h2>
        {costs.map(cost=>(
            <Cost
            key={cost.id}
            cost={cost}
            />
        ))}
    </div>
);

List.propTypes = {
    costs: PropTypes.array.isRequired
}


export default List