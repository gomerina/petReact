import './style.scss'
import SectionHead from '../sectionHead/SectionHead'

import Toggler from '../../toggler/Toggler'
import TogglerHead from '../../toggler/togglerHead/TogglerHead'
import TogglerBody from '../../toggler/togglerBody/TogglerBody'

export default function Faq({ items = [] }) {
    const initialActiveIndex = items.findIndex(({ active }) => active)

    return (
        <div className='section faq'>
            <div className='container'>
                <SectionHead>FAQ</SectionHead>
                <Toggler
                    key={`faq-${initialActiveIndex}`}
                    className='faq__body accordion'
                    activeIndex={initialActiveIndex === -1 ? null : initialActiveIndex}
                >
                    {items.map(({ name, content }, index) => (
                        <div className='faq__item' key={`${name}-${index}`}>
                            <TogglerHead
                                togglerIndex={index}
                                className="faq__item-head"
                            >
                                {name}
                            </TogglerHead>
                            <TogglerBody togglerIndex={index} html={content}></TogglerBody>
                        </div>
                    ))}
                </Toggler>
            </div>
        </div>
    )
}