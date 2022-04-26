import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default function Cell({
    number,
    rowIndex,
    colIndex,
    drag,
    allowDrop,
    drop,
}) {
    return (
        <div
            key={colIndex}
            className="number-item"
            draggable
            onDragStart={ev => drag(ev, [rowIndex, colIndex])}
            onDragOver={allowDrop}
            onDrop={ev => drop(ev, [rowIndex, colIndex])}
            data-testid="cell-matrix"
        >
            {number}
        </div>
    )
}

Cell.propTypes = {
    number: PropTypes.number.isRequired,
    rowIndex: PropTypes.number.isRequired,
    colIndex: PropTypes.number.isRequired,
    drag: PropTypes.func.isRequired,
    allowDrop: PropTypes.func.isRequired,
    drop: PropTypes.func.isRequired,
}
