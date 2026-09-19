import './style.scss'
import { useState } from 'react'

export default function Counter({ onHasItemChange }) {
    const [value, setValue] = useState('1')

    function updateValue(newValue) {
        setValue(newValue)
        onHasItemChange?.(Number(newValue) >= 1)
    }
    function reduceValue() {
        const newValue = String(
            Math.max(0, Number(value) - 1)
        )
        updateValue(newValue)
    }
    function increaseValue() {
        const newValue = String(
            Math.min(10, Number(value) + 1)
        )
        updateValue(newValue)
    }
    function handleChange(event) {
        const inputValue = event.target.value
        if (inputValue === '') {
            return
        }
        if (
            inputValue.length > 1 &&
            inputValue.startsWith('0')
        ) {
            return
        }
        if (Number(inputValue) > 10) {
            updateValue('10')
            return
        }
        updateValue(inputValue)
    }

    return (
        <div className="counter">
            <button
                type="button"
                onClick={reduceValue}
                className="counter__btn"
            >
                -
            </button>

            <input
                type="number"
                value={value}
                onChange={handleChange}
                min="0"
                max="10"
            />

            <button
                type="button"
                onClick={increaseValue}
                className="counter__btn"
            >
                +
            </button>
        </div>
    )
}