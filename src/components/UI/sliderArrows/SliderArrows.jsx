import './style.scss'

export default function SliderArrows({
    prevClass,
    nextClass
}) {
    return (
        <>
            <button className={prevClass}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="3" fill="white" />
                    <path d="M23.071 13L16 20.0711" stroke="#224F34" strokeWidth="2" strokeLinecap="round" />
                    <path d="M23.071 27.0713L16 20.0002" stroke="#224F34" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>
            <button className={nextClass}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="40" y="40" width="40" height="40" rx="3" transform="rotate(180 40 40)" fill="white" />
                    <path d="M16.929 27L24 19.9289" stroke="#224F34" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16.929 12.9287L24 19.9998" stroke="#224F34" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>
        </>
    )
}