import React from 'react'
import { useContext, useCallback } from 'react'
import { MatrixContext } from 'store/context'
import { FixedSizeGrid as Grid } from 'react-window'
import { setMatrix } from 'store/action'
import './index.scss'

export default function Matrix() {
    const { matrix, dispatch } = useContext(MatrixContext)

    const drag = useCallback(ev => {
        ev.dataTransfer.effectAllowed = 'move'
        ev.dataTransfer.setData('text', ev.target.id)
    }, [])

    const allowDrop = useCallback(ev => {
        ev.preventDefault()
    }, [])

    const drop = useCallback(
        ev => {
            ev.preventDefault()
            const [dragIndex, dropIndex] = [
                ev.dataTransfer.getData('text').split(','),
                ev.target.id.split(','),
            ]
            if (!dragIndex) return
            ;[
                matrix[dropIndex[0]][dropIndex[1]],
                matrix[dragIndex[0]][dragIndex[1]],
            ] = [
                matrix[dragIndex[0]][dragIndex[1]],
                matrix[dropIndex[0]][dropIndex[1]],
            ]
            dispatch(setMatrix([...matrix]))
        },
        [matrix],
    )

    // eslint-disable-next-line react/prop-types
    const CellTest = ({ columnIndex, rowIndex, style }) => (
        <div
            className="flex justify-center items-center cell-item"
            data-testid="cell-matrix"
            id={[rowIndex, columnIndex]}
            style={style}
            draggable
            onDragStart={drag}
            onDragOver={allowDrop}
            onDrop={drop}
        >
            {matrix[rowIndex][columnIndex]}
        </div>
    )

    return (
        <>
            {!!matrix.length && (
                <Grid
                    columnCount={matrix.length}
                    columnWidth={60}
                    height={450}
                    rowCount={matrix.length}
                    rowHeight={60}
                    width={450}
                >
                    {CellTest}
                </Grid>
            )}
        </>
    )
}
