import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from 'store/context'
import { setNount, setMatrix } from 'store/action'

export default function InputNumber() {
    const { nount, dispatch } = useContext(MatrixContext)

    const genMatrix = () => {
        const arrMatrix = []
        let count = 1
        for (let row = 0; row < nount; row++) {
            arrMatrix[row] = []
        }
        for (let col = 0; col < nount; col++) {
            if (col % 2 === 0) {
                for (let row = 0; row < nount; row++) {
                    arrMatrix[row][col] = count
                    count++
                }
            } else {
                for (let row = nount - 1; row > -1; row--) {
                    arrMatrix[row][col] = count
                    count++
                }
            }
        }
        dispatch(setMatrix(arrMatrix))
    }

    const handleTextInput = ev => {
        if (ev.key === 'Enter' && nount > 0) {
            genMatrix()
        }
    }

    return (
        <>
            <h1>Zigzag pattern number table</h1>
            <div className="input-text">
                Nhập N (rôi nhấn Enter):{' '}
                <input
                    type="number"
                    value={nount}
                    onKeyDown={handleTextInput}
                    onChange={ev => dispatch(setNount(ev.target.value))}
                    data-testid="input"
                />
            </div>
        </>
    )
}
