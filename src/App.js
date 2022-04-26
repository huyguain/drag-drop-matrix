import React from 'react'
import './App.css'
import { useCallback, useState } from 'react'
import Cell from 'components/Cell'

function App() {
    const [matrix, setMatrix] = useState([])
    const [itemDrag, setItemDrag] = useState()
    const [nount, setNount] = useState('')

    const genMatrix = () => {
        const arrMatrix = []
        let count = 1
        for (let i = 0; i < nount; i++) {
            arrMatrix[i] = []
        }
        for (let j = 0; j < nount; j++) {
            if (j % 2 === 0) {
                for (let i = 0; i < nount; i++) {
                    arrMatrix[i][j] = count
                    count++
                }
            } else {
                for (let i = nount - 1; i > -1; i--) {
                    arrMatrix[i][j] = count
                    count++
                }
            }
        }
        setMatrix(arrMatrix)
    }

    const drag = useCallback((ev, index) => {
        ev.dataTransfer.effectAllowed = 'move'
        setItemDrag(index)
    }, [])

    const allowDrop = useCallback(ev => {
        ev.preventDefault()
    }, [])

    const drop = useCallback(
        (ev, index) => {
            ev.preventDefault()
            if (!itemDrag) return
            ;[matrix[index[0]][index[1]], matrix[itemDrag[0]][itemDrag[1]]] = [
                matrix[itemDrag[0]][itemDrag[1]],
                matrix[index[0]][index[1]],
            ]
            setMatrix([...matrix])
        },
        [itemDrag, matrix],
    )

    const handleTextInput = ev => {
        if (ev.key === 'Enter' && nount > 0) {
            genMatrix()
        }
    }

    return (
        <div className="App">
            <h1>Zigzag pattern number table</h1>
            <div className="input-text">
                Nhập N (rôi nhấn Enter):{' '}
                <input
                    type="number"
                    value={nount}
                    onKeyDown={handleTextInput}
                    onChange={ev => setNount(ev.target.value)}
                    data-testid="input"
                />
            </div>
            {matrix.map((row, rowIndex) => {
                return (
                    <div style={{ display: 'flex' }} key={rowIndex}>
                        {row.map((number, colIndex) => {
                            return (
                                <Cell
                                    key={`${rowIndex}${colIndex}`}
                                    number={number}
                                    rowIndex={rowIndex}
                                    colIndex={colIndex}
                                    draggable
                                    drag={drag}
                                    allowDrop={allowDrop}
                                    drop={drop}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default App
