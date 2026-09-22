import { useState } from 'react'
import TogglerContext from './togglerContext'

export default function Toggler({ children, className = '', activeIndex: initialActiveIndex = null, ...props }) {
    const isAccordion = className.split(' ').includes('accordion')
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex)

    function toggleIndex(index) {
        setActiveIndex((current) => current === index ? null : index)
    }

    return (
        <TogglerContext.Provider value={isAccordion ? { activeIndex, toggleIndex } : null}>
            <div {...props} className={className}>{children}</div>
        </TogglerContext.Provider>
    )
}