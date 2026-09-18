import './style.scss'
import SectionHead from '../sectionHead/SectionHead'
import CategoryCard from '../../cards/categoryCard/CategoryCard'
export default function mainCategories() {

    const category = [
        {
            id: 1,
            preview: './cat-1@x2.jpg',
            name: 'Accessories',
            descr: 'Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.',
            link: '#',
        },
        {
            id: 2,
            preview: './cat-2@x2.jpg',
            name: 'Dresses',
            descr: 'Explore a stunning range of designer dresses, including evening gowns and chic day dresses.',
            link: '#',
        },
        {
            id: 3,
            preview: './cat-3@x2.jpg',
            name: 'Outerwear',
            descr: 'Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.',
            link: '#',
        },
    ]
    return (
        <section className='section main-categories'>
            <div className='container'>
                <SectionHead subheading="Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!">
                    Designer Clothes For You
                </SectionHead>
                <div className='selling__layout'>
                    {category.map((item) => (
                        <CategoryCard
                            key={item.id}
                            preview={item.preview}
                            name={item.name}
                            descr={item.descr}
                            link={item.link}
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}