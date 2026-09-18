import './style.scss'

export default function sectionHead({
    children,
    subheading,
    className = '',
    ...props
}) {
    return (
        <div className='section__head'>
            <h2
                className={`section__heading ${className}`}
                {...props}
            >
                {children}
            </h2>
            {subheading ? <h3 className='h5'>{subheading}</h3> : null}
        </div>

    )
}