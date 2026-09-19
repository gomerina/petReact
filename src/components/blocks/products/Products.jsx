import './style.scss'
import { useState } from 'react'
import SectionHead from '../sectionHead/SectionHead'
import { Tabs, TabsHeader, TabsTrigger, TabsBody, TabsContent, } from "../../tabs/Tabs";
import ProductCard from '../../cards/productCard/ProductCard'
export default function Products({ onItemChange }) {
    const [cartItems, setCartItems] = useState({})

    function handleProductChange(id, isActive) {
        setCartItems((items) => ({
            ...items,
            [id]: isActive,
        }))
        onItemChange?.(isActive)
    }

    const products = {
        Sale: [
            {
                id: 'sale-1',
                preview: './tc-1@x2.jpg',
                name: 'Spread Collar Shirt',
                price: '38.99',
                rating: '5.0',
                link: '#',
            },
            {
                id: 'sale-2',
                preview: './tc-2@x2.jpg',
                name: 'White Solid Formal Shirt',
                price: '62.99',
                rating: '4.9',
                link: '#',
            },
            {
                id: 'sale-3',
                preview: './tc-3@x2.jpg',
                name: 'Shine On Me Blouse',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
            {
                id: 'sale-4',
                preview: './tc-4@x2.jpg',
                name: 'Gray Solid Padded Jacket',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
            {
                id: 'sale-5',
                preview: './tc-5@x2.jpg',
                name: 'Printed Loose T-shirt',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
            {
                id: 'sale-6',
                preview: './tc-6@x2.jpg',
                name: 'Summer Wind Crop Shirt',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
            {
                id: 'sale-7',
                preview: './tc-7@x2.jpg',
                name: 'Tailored Jacket',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
            {
                id: 'sale-8',
                preview: './tc-8@x2.jpg',
                name: 'Solid Round Neck T-shirt',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
        ],

        HOT: [
            {
                id: 'HOT-1',
                preview: './tc-3@x2.jpg',
                name: 'Shine On Me Blouse',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
            {
                id: 'HOT-2',
                preview: './tc-4@x2.jpg',
                name: 'Gray Solid Padded Jacket',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
            {
                id: 'HOT-3',
                preview: './tc-5@x2.jpg',
                name: 'Printed Loose T-shirt',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
            {
                id: 'HOT-4',
                preview: './tc-6@x2.jpg',
                name: 'Summer Wind Crop Shirt',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
        ],

        'New Arrivals': [
            {
                id: 'Arrivals-1',
                preview: './tc-4@x2.jpg',
                name: 'Gray Solid Padded Jacket',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
            {
                id: 'Arrivals-2',
                preview: './tc-7@x2.jpg',
                name: 'Tailored Jacket',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
            {
                id: 'Arrivals-3',
                preview: './tc-8@x2.jpg',
                name: 'Solid Round Neck T-shirt',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
        ],

        Accessories: [
            {
                id: 'Accessories-1',
                preview: './tc-5@x2.jpg',
                name: 'Printed Loose T-shirt',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
            {
                id: 'Accessories-2',
                preview: './tc-5@x2.jpg',
                name: 'Printed Loose T-shirt',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
            {
                id: 'Accessories-3',
                preview: './tc-6@x2.jpg',
                name: 'Summer Wind Crop Shirt',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
            {
                id: 'Accessories-4',
                preview: './tc-7@x2.jpg',
                name: 'Tailored Jacket',
                price: '49.99',
                rating: '5.0',
                link: '#',
            },
        ],
    }
    return (
        <section className='section products'>
            <div className='container'>
                <SectionHead>Our products</SectionHead>
                <Tabs defaultTab="Sale">
                    <TabsHeader>
                        <TabsTrigger value="Sale">
                            Sale
                        </TabsTrigger>
                        <TabsTrigger value="HOT">
                            HOT
                        </TabsTrigger>
                        <TabsTrigger value="New Arrivals">
                            New Arrivals
                        </TabsTrigger>
                        <TabsTrigger value="Accessories">
                            Accessories
                        </TabsTrigger>
                    </TabsHeader>
                    <TabsBody>
                        {Object.entries(products).map(([category, items]) => (
                            <TabsContent key={category} value={category}>
                                <div className="products__layout">
                                    {items.map((item) => (
                                        <ProductCard
                                            key={item.id}
                                            preview={item.preview}
                                            name={item.name}
                                            price={item.price}
                                            rating={item.rating}
                                            link={item.link}
                                            hasItem={Boolean(cartItems[item.id])}
                                            onHasItemChange={(isActive) =>
                                                handleProductChange(item.id, isActive)
                                            }
                                        />
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>

        </section>

    )
}