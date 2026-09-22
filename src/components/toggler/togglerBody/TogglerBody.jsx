import './style.scss'
import { useTogglerContext } from '../togglerContext'

export default function TogglerBody({
    html,
    togglerIndex,
    active = false,
    className = '',
}) {
    const toggler = useTogglerContext()
    const isAccordion = toggler && togglerIndex !== undefined
    const isActive = isAccordion ? toggler.activeIndex === togglerIndex : active

    return (
        <div className={`toggler__body${isActive ? ' active' : ''} ${className}`}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}