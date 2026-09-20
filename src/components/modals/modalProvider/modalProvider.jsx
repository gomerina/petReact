import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Fancybox } from '@fancyapps/ui'

import { modalRegistry } from '../../../modalRegistry'

import '@fancyapps/ui/dist/fancybox/fancybox.css'

export default function ModalProvider() {
    useEffect(() => {
        const handleClick = (event) => {
            const target = event.target instanceof Element
                ? event.target.closest('[data-modal]')
                : null

            if (!target) {
                return
            }

            const modalName = target.dataset.modal

            if (!modalName) {
                return
            }

            const ModalComponent = modalRegistry[modalName]

            if (!ModalComponent) {
                console.warn(
                    `Modal "${modalName}" is not registered in modalRegistry`
                )

                return
            }

            event.preventDefault()
            openModal(ModalComponent)
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    return null
}

function openModal(ModalComponent) {
    const container = document.createElement('div')
    container.className = 'react-modal-container'
    document.body.append(container)

    let horizontalGesture = false

    const handleBackdropClick = (event) => {
        if (!(event.target instanceof Element)) {
            return
        }

        if (horizontalGesture) {
            horizontalGesture = false
            return
        }

        const clickedOutsideModal = !event.target.closest('.modal')
        const clickedFancyboxArea = event.target.closest(
            '.fancybox__backdrop, .fancybox__slide'
        )

        if (clickedOutsideModal && clickedFancyboxArea) {
            event.preventDefault()
            event.stopImmediatePropagation()
            closeModal(container)
        }
    }

    let pointerStartX = 0
    let pointerStartY = 0
    let pointerStartedInModal = false

    const handlePointerStart = (event) => {
        pointerStartedInModal = event.target instanceof Element
            && Boolean(event.target.closest('.modal'))

        if (pointerStartedInModal) {
            const target = event.target instanceof Element ? event.target : null

            if (!target?.closest('input, button, a, [tabindex], [contenteditable="true"]')) {
                document.activeElement?.blur()
            }

            event.stopImmediatePropagation()
            return
        }

        horizontalGesture = false
        pointerStartX = event.clientX
        pointerStartY = event.clientY
    }

    const handlePointerMove = (event) => {
        if (pointerStartedInModal) {
            return
        }

        const deltaX = Math.abs(event.clientX - pointerStartX)
        const deltaY = Math.abs(event.clientY - pointerStartY)

        if (deltaX > deltaY && deltaX > 5) {
            horizontalGesture = true
            event.preventDefault()
            event.stopImmediatePropagation()
        }
    }

    document.addEventListener('click', handleBackdropClick, true)
    document.addEventListener('pointerdown', handlePointerStart, true)
    document.addEventListener('pointermove', handlePointerMove, {
        capture: true,
        passive: false,
    })

    const root = createRoot(container)
    root.render(
        <ModalComponent
            onClose={() => closeModal(container)}
        />
    )

    requestAnimationFrame(() => {
        Fancybox.show(
            [
                {
                    src: container,
                    type: 'html',
                },
            ],
            {
                closeButton: false,
                click: false,
                dragToClose: false,
                keyboard: false,
                mainClass: 'modal-fancybox',
                Carousel: {
                    gestures: false,
                    Panzoom: {
                        touch: false,
                    },
                },
                on: {
                    destroy: () => {
                        document.removeEventListener('click', handleBackdropClick, true)
                        document.removeEventListener('pointerdown', handlePointerStart, true)
                        document.removeEventListener('pointermove', handlePointerMove, true)
                        root.unmount()
                        container.remove()
                    },
                },
            }
        )

        requestAnimationFrame(() => {
            const slide = document.querySelector(
                '.fancybox__slide.is-selected'
            )
            const content = slide?.querySelector('.fancybox__content') ?? slide

            content?.append(container)
        })
    })
}

function closeModal(container) {
    const modal = container.querySelector('.modal')

    if (!modal) {
        Fancybox.close()
        return
    }

    modal.classList.add('modal--closing')

    window.setTimeout(() => {
        Fancybox.close()
    }, 300)
}