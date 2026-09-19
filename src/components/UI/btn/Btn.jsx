import './style.scss'

export default function Btn({
    children,
    as = 'button',
    className = '',
    isActive,
    onClick,
    setBasketValue,
    ...props
}) {
    const Component = as

    return (
        <Component
            className={`btn ${className}`}
            {...props}
            onClick={onClick}
        >
            {children}
        </Component>
    )
}