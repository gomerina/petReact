import './style.scss'

export default function ReviewsCard({
    author,
    descr,
    className
}) {
    return (
        <div className={`reviews-card ${className}`}>
            <div className='reviews-card__content'>
                <h3 className='reviews-card__author h5'>{author}</h3>
                <div className='reviews-card__descr'>
                    <p>
                        {descr}
                    </p>
                </div>
            </div>
        </div>
    )
}