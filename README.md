# drag-drop-matrix
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## List component in project

This source code, all component are used functional component and react hooks instead of using statefull 
component, lifecyle like the old react versions. Here are some descriptions for the project:

### Logic generate matrix
```
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
```

- With nount, generate matrix NxN.
- I traverse the array zig zag, even columns are filled in ascending order, odd is the opposite.
- Set that result into matrix state.

### Virtualized (use react-window)

- When Nount too large, react window works by only rendering part of a large matrix.  This helps address some common performance bottlenecks:
    It reduces the amount of work (and time) required to render the initial view and to process updates.
    It reduces the memory footprint by avoiding over-allocation of DOM nodes.

### Swap two item when drag drop
```
    // When drop into a item, swap value two item
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
```
- When drop into a other item, swap value two that item. Set new value into matrix state.

### App component

- State: nount (input's matrix NxN), matrix (matrix show), itemDrag (saved when drag a item).
- Function: genMatrix (generate matrix with nount input), drag, drop (logic for action drag and drop).
- Display: input nount, map to render each Cell.

### Testing for App component
```
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
```

### Cell component
- Display number in that cell. Fire event when drag, drop.

## Some references

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[React documentation](https://reactjs.org/).

##Some additional libraries

- eslint, husky, lint-staged, prettier, sass, tailwind, antd design
