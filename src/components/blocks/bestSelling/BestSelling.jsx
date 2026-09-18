import './style.scss';
import SectionHead from '../sectionHead/SectionHead'
import ProductCard from '../../cards/productCard/ProductCard'
export default function BestSelling() {
    const products = [
        {
            id: 1,
            preview: './pc-1@x2.jpg',
            name: 'Regular Fit Long Sleeve Top',
            price: '38.99',
            rating: '5.0',
            link: '#',
        },
        {
            id: 2,
            preview: './pc-2@x2.jpg',
            name: 'Black Crop Tailored Jacket',
            price: '62.99',
            rating: '4.9',
            link: '#',
        },
        {
            id: 3,
            preview: './pc-3@x2.jpg',
            name: 'Textured Sunset Shirt',
            price: '49.99',
            rating: '5.0',
            link: '#',
        },
    ]
    return (
        <section className='section selling'>
            <div className='container'>
                <SectionHead
                    subheading='Get in on the trend with our curated selection of best-selling styles.'>
                    Best selling
                </SectionHead>
                <div className='selling__layout'>
                    {products.map((item) => (
                        <ProductCard
                            key={item.id}
                            preview={item.preview}
                            name={item.name}
                            price={item.price}
                            rating={item.rating}
                            link={item.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}