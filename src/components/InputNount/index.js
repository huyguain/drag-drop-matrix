import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from 'store/context'
import { setNount, setMatrix } from 'store/action'
import { InputNumber } from 'antd'
import './index.scss'

export default function InputNount() {
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
            <h1 className="text-3xl font-semibold text-blue-600">
                Zigzag pattern number table
            </h1>
            <div className="input-text">
                <span className="text-slate-600">Enter N: </span>
                <InputNumber
                    min={1}
                    defaultValue={nount}
                    onKeyDown={handleTextInput}
                    onChange={value => dispatch(setNount(value))}
                    data-testid="input"
                />
            </div>
        </>
    )
}
