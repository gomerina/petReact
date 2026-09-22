import { useEffect, useState } from 'react'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import './style.scss'

import SectionHead from '../sectionHead/SectionHead'

const fancyboxOptions = {
    Carousel: {
        transition: 'slide',
    },
}

function useFancybox(options = fancyboxOptions) {
    const [root, setRoot] = useState(null)

    useEffect(() => {
        if (!root) return

        Fancybox.bind(root, '[data-fancybox]', options)

        return () => {
            Fancybox.unbind(root)
            Fancybox.close()
        }
    }, [root, options])

    return [setRoot]
}



export default function Gallery({ items = [] }) {
    const [fancyboxRef] = useFancybox()

    return (
        <section className="section gallery">
            <div className="container">
                <SectionHead>Gallery</SectionHead>

                <div className="gallery__layout" ref={fancyboxRef}>
                    {items.map((src, index) => (
                        <a
                            key={src}
                            href={src}
                            data-fancybox="gallery"
                            className="gallery__item"
                        >
                            <img
                                src={src}
                                alt={`Gallery item ${index + 1}`}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}