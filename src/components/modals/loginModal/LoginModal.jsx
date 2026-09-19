import './style.scss'
import Input from '../../UI/formInput/FormInput'
import Btn from '../../UI/btn/Btn'
import { useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function LoginModal({ onClose }) {
    const [values, setValues] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('idle')
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: undefined }))
    }

    const validate = () => {
        const next = {}
        if (!EMAIL_REGEX.test(values.email.trim())) {
            next.email = 'Email is not valid'
        }
        if (!values.password) {
            next.password = 'Enter your password'
        }
        return next
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const next = validate()
        setErrors(next)
        if (Object.keys(next).length > 0) return

        setStatus('submitting')
        try {
            setStatus('success')
        } catch (err) {
            setStatus('idle')
            setErrors({ form: 'Invalid email or password' })
        }
    }

    return (
        <div
            className='modal'
        >
            <button
                className='modal__close'
                type='button'
                onClick={onClose}
            >
                <span>×</span>
            </button>

            <h3 className='modal__title'>Log in</h3>

            {status !== 'success' ? (
                <form className='form' onSubmit={handleSubmit} noValidate>
                    <div className={`form__item ${errors.email ? 'input-error' : ''}`}>
                        <Input
                            type='email'
                            name='email'
                            placeholder='Email'
                            autoComplete='email'
                            value={values.email}
                            onChange={handleChange}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && <p id='email-error' role='alert'>{errors.email}</p>}
                    </div>

                    <div className={`form__item ${errors.password ? 'input-error' : ''}`}>
                        <Input
                            type='password'
                            name='password'
                            placeholder='Password'
                            autoComplete='current-password'
                            value={values.password}
                            onChange={handleChange}
                            aria-invalid={!!errors.password}
                            aria-describedby={errors.password ? 'password-error' : undefined}
                        />
                        {errors.password && <p id='password-error' role='alert'>{errors.password}</p>}
                    </div>

                    {errors.form && <p role='alert'>{errors.form}</p>}

                    <Btn className='fill' type='submit' disabled={status === 'submitting'}>
                        {status === 'submitting' ? 'Logging in…' : 'Log in'}
                    </Btn>
                </form>
            ) : (
                <div role='status'>Login success</div>
            )}
        </div>
    )
}