import { useState } from 'react'

import './css/nullstyle.scss'
import './css/style.scss'
import './css/typography.scss'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

import Header from './components/chunk/header/Header'
import Footer from './components/chunk/footer/Footer'
import MainScreen from './components/blocks/mainScreen/MainScreen'
import BestSelling from './components/blocks/bestSelling/BestSelling'
import Products from './components/blocks/products/Products'
import Offer from './components/blocks/offer/Offer'
import MainCategories from './components/blocks/mainCategories/MainCategories'
import Reviews from './components/blocks/reviews/Reviews'
import Gallery from './components/blocks/gallery/Gallery'
import ModalProvider from './components/modals/modalProvider/modalProvider'

export default function App() {
	const [basketCount, setBasketCount] = useState(0)

	function handleItemChange(isAdded) {
		setBasketCount(prev => {
			return isAdded ? prev + 1 : prev - 1
		})
	}

	return (
		<>
			<Header basketCount={basketCount} />

			<main>
				<MainScreen />
				<BestSelling onItemChange={handleItemChange} />
				<Products onItemChange={handleItemChange} />
				<Offer />
				<MainCategories />
				<Gallery />
				<Reviews />
			</main>
			<ModalProvider />
			<Footer />
		</>
	)
}