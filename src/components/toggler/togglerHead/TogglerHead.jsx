import './style.scss'

import { useState } from 'react'
import { useTogglerContext } from '../togglerContext'

export default function TogglerHead({
    children,
    togglerIndex,
    active: controlledActive,
    onToggle,
    className = '',
    ...props
}) {
    const toggler = useTogglerContext()
    const [internalActive, setInternalActive] = useState(controlledActive ?? false)
    const isControlled = controlledActive !== undefined
    const isAccordion = toggler && togglerIndex !== undefined
    const active = isAccordion
        ? toggler.activeIndex === togglerIndex
        : isControlled ? controlledActive : internalActive

    function toggleActive() {
        if (isAccordion) {
            toggler.toggleIndex(togglerIndex)
            return
        }

        const nextActive = !active

        if (!isControlled) {
            setInternalActive(nextActive)
        }

        onToggle?.(nextActive)
    }
    return (
        <div {...props} onClick={toggleActive} className={`toggler__head${active ? ' active' : ''} ${className}`}>
            <h3 className='h5'>{children}</h3>
            <span className='toggler__head-icon'></span>
        </div>
    )
}