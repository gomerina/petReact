import { useState } from 'react'
import './style.scss'

export default function FooterSubscribe() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailRegex.test(email)) {
            setError(true)
            setSuccess(false)
            return
        }

        setError(false)
        setSuccess(true)
        setEmail('')
    }

    return (
        <>
            {!success ?
                (<form onSubmit={handleSubmit} noValidate>

                    <div className={`footer__subscribe ${error ? 'input-error' : ''}`}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setError(false)
                                setSuccess(false)
                            }}
                        />

                        <button
                            type="submit"
                            className="footer__subscribe-btn"
                        >
                            Submit
                        </button>
                    </div>
                </form>)
                :
                (
                    <div className="footer__subscribe-success">
                        Successfully subscribed!
                    </div>
                )
            }

        </>

    )
}