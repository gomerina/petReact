import './style.scss'

export default function Btn({
    children,
    as = 'button',
    className = '',
    ...props
}) {
    const Component = as

    return (
        <Component
            className={`btn ${className}`}
            {...props}
        >
            {children}
        </Component>
    )
}