import { useEffect, useState } from 'react'
import './style.scss'

export default function Timer({
    timestamp,
    showSeconds = true,
}) {
    const getTimeLeft = () => {
        const difference = timestamp * 1000 - Date.now()

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        }
    }

    const [timeLeft, setTimeLeft] = useState(getTimeLeft)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft())
        }, 1000)

        return () => clearInterval(interval)
    }, [timestamp])

    const formatNumber = (value) => String(value).padStart(2, '0')

    return (
        <div className='timer'>
            <div className='timer__item'>
                <div className='timer__item-head h4'>
                    {timeLeft.days}
                </div>

                <div className='timer__item-body'>
                    Days
                </div>
            </div>

            <div className='timer__item'>
                <div className='timer__item-head h4'>
                    {formatNumber(timeLeft.hours)}
                </div>

                <div className='timer__item-body'>
                    Hours
                </div>
            </div>

            <div className='timer__item'>
                <div className='timer__item-head h4'>
                    {formatNumber(timeLeft.minutes)}
                </div>

                <div className='timer__item-body'>
                    Minutes
                </div>
            </div>

            {showSeconds && (
                <div className='timer__item'>
                    <div className='timer__item-head h4'>
                        {formatNumber(timeLeft.seconds)}
                    </div>

                    <div className='timer__item-body'>
                        Seconds
                    </div>
                </div>
            )}


        </div>
    )
}
