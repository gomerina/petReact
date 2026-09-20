import './style.scss'

import { useState } from 'react'
import Input from '../../UI/formInput/FormInput'
import Btn from '../../UI/btn/Btn'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_VALUES = {
    email: '',
    password: '',
    currentPassword: '',
    repeatPassword: '',
}

function FormField({
    name,
    type = 'text',
    placeholder,
    autoComplete,
    value,
    error,
    onChange,
}) {
    const errorId = `${name}-error`

    return (
        <div className={`form__item ${error ? 'input-error' : ''}`}>
            <Input
                type={type}
                name={name}
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
                aria-invalid={!!error}
                aria-describedby={error ? errorId : undefined}
            />

            {error && (
                <p id={errorId} role='alert'>
                    {error}
                </p>
            )}
        </div>
    )
}

export default function LoginModal({ onClose }) {
    const [values, setValues] = useState(INITIAL_VALUES)
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('idle')
    const [modal, setModal] = useState('loginModal')

    const isLogin = modal === 'loginModal'
    const isSubmitting = status === 'submitting'

    const handleChange = (e) => {
        const { name, value } = e.target

        setValues((prev) => ({
            ...prev,
            [name]: value,
        }))

        setErrors((prev) => ({
            ...prev,
            [name]: undefined,
            form: undefined,
        }))
    }

    const resetFormState = () => {
        setErrors({})
        setStatus('idle')
    }

    const toRegModal = () => {
        setModal('regModal')
        resetFormState()
    }

    const toLoginModal = () => {
        setModal('loginModal')
        resetFormState()
    }

    const validate = () => {
        const next = {}

        if (!EMAIL_REGEX.test(values.email.trim())) {
            next.email = 'Email is not valid'
        }

        if (isLogin) {
            if (!values.password) {
                next.password = 'Enter your password'
            }
        } else {
            if (values.currentPassword.length < 8) {
                next.currentPassword = 'At least 8 characters'
            }

            if (values.repeatPassword !== values.currentPassword) {
                next.repeatPassword = 'The password does not match.'
            }
        }

        return next
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const nextErrors = validate()

        setErrors(nextErrors)

        // Есть ошибки — прекращаем выполнение
        if (Object.keys(nextErrors).length > 0) {
            return
        }

        setStatus('submitting')

        try {
            /*
             * Здесь позже можно будет сделать запрос к API:
             *
             * if (isLogin) {
             *     await login(values.email, values.password)
             * } else {
             *     await register(values.email, values.currentPassword)
             * }
             */

            // Для демонстрации считаем операцию успешной
            setStatus('success')
        } catch (error) {
            setStatus('idle')

            setErrors({
                form: isLogin
                    ? 'Invalid email or password'
                    : 'Unable to create account',
            })
        }
    }

    return (
        <div className='modal'>
            <button
                className='modal__close'
                type='button'
                onClick={onClose}
                aria-label='Close'
            >
                <span>×</span>
            </button>

            {status === 'success' ? (
                <div
                    className='modal__success'
                    role='status'
                >
                    {isLogin ? (
                        <>
                            <h3 className='modal__title'>
                                Login successful
                            </h3>

                            <p>
                                You have successfully logged in.
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className='modal__title'>
                                Account created
                            </h3>

                            <p>
                                Your account has been successfully created.
                            </p>
                        </>
                    )}
                </div>
            ) : (
                <>
                    <h3 className='modal__title'>
                        {isLogin ? 'Log in' : 'Registration'}
                    </h3>

                    <form
                        className='form'
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <FormField
                            name='email'
                            type='email'
                            placeholder='Email'
                            autoComplete='email'
                            value={values.email}
                            error={errors.email}
                            onChange={handleChange}
                        />

                        {isLogin ? (
                            <FormField
                                name='password'
                                type='password'
                                placeholder='Password'
                                autoComplete='current-password'
                                value={values.password}
                                error={errors.password}
                                onChange={handleChange}
                            />
                        ) : (
                            <>
                                <FormField
                                    name='currentPassword'
                                    type='password'
                                    placeholder='Password'
                                    autoComplete='new-password'
                                    value={values.currentPassword}
                                    error={errors.currentPassword}
                                    onChange={handleChange}
                                />

                                <FormField
                                    name='repeatPassword'
                                    type='password'
                                    placeholder='Repeat password'
                                    autoComplete='new-password'
                                    value={values.repeatPassword}
                                    error={errors.repeatPassword}
                                    onChange={handleChange}
                                />
                            </>
                        )}

                        {errors.form && (
                            <p role='alert'>
                                {errors.form}
                            </p>
                        )}

                        <div className='modal__row'>
                            <Btn
                                className='fill'
                                type='submit'
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? isLogin
                                        ? 'Logging in…'
                                        : 'Creating…'
                                    : isLogin
                                        ? 'Log in'
                                        : 'Create account'}
                            </Btn>

                            <button
                                className='modal__change'
                                type='button'
                                onClick={
                                    isLogin
                                        ? toRegModal
                                        : toLoginModal
                                }
                            >
                                {isLogin
                                    ? 'Create account'
                                    : 'Log in'}
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    )
}
