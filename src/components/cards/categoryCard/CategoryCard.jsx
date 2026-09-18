import './style.scss'

export default function CategorytCard({
    name,
    descr,
    link,
    preview,
}) {
    return (
        <a href={link} className='category-card'>
            <div className='category-card__head'>
                <img src={preview} alt="" />
            </div>
            <div className='category-card__body'>
                <div className="category-card__name h4">{name}</div>
                <div className='category-card__body'>
                    <p>{descr}</p>
                </div>
            </div>
        </a>
    )
}