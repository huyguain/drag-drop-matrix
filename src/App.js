import React from 'react'
import './App.css'
import { useReducer, useCallback } from 'react'
import { MatrixContext } from 'store/context'
import { reducer, initialState } from 'store/reducer'
import Matrix from 'components/Matrix'
import InputNumber from 'components/InputNumber'

function App() {
    const [{ matrix, nount }, dispatch] = useReducer(
        useCallback(reducer, []),
        initialState,
    )

    return (
        <MatrixContext.Provider value={{ matrix, nount, dispatch }}>
            <div className="App">
                <InputNumber />
                <Matrix />
            </div>
        </MatrixContext.Provider>
    )
}

export default App
