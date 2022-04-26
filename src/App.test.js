/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

test('renders the correct initial DOM', () => {
    const doc = render(<App />)
    const inputElement = doc.getByTestId('input')
    const cells = doc.queryAllByTestId('cell-matrix')

    // The input should be blank.
    expect(inputElement.getAttribute('value')).toBe('')

    // There should be 0 cell in the document.
    expect(cells.length).toBe(0)
})

test('it generate matrix', () => {
    const doc = render(<App />)

    const inputElement = doc.getByTestId('input')

    fireEvent.change(inputElement, { target: { value: 3 } })
    fireEvent.keyDown(inputElement, {
        key: 'Enter',
        code: 'Enter',
        charCode: 13,
    })

    const cells = doc.getAllByTestId('cell-matrix')
    const reusltMatrix = cells.map(cell => cell.textContent).join('-')

    // There should be 9 cell in the document.
    expect(cells.length).toBe(9)
    // There should be reden with rule
    expect(reusltMatrix).toBe('1-6-7-2-5-8-3-4-9')
})
