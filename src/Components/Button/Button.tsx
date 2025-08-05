import './Button.css'

export default function Button({ onClick, children, className='' }) {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

