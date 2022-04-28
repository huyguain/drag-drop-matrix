import React from 'react'
import './App.scss'
import { useReducer } from 'react'
import { MatrixContext } from 'store/context'
import { reducer, initialState } from 'store/reducer'
import Matrix from 'components/Matrix'
import InputNount from 'components/InputNount'

function App() {
    const [{ matrix, nount }, dispatch] = useReducer(reducer, initialState)

    return (
        <MatrixContext.Provider value={{ matrix, nount, dispatch }}>
            <div className="App flex flex-col items-center">
                <InputNount />
                <Matrix />
            </div>
        </MatrixContext.Provider>
    )
}

export default App
