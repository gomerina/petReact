import './css/nullstyle.scss'
import './css/style.scss'
import './css/typography.scss'

import Header from './components/chunk/header/Header'
import Footer from './components/chunk/footer/Footer'
import MainScreen from './components/blocks/mainScreen/MainScreen'
import BestSelling from './components/blocks/bestSelling/BestSelling';
import Products from './components/blocks/products/Products';
import Offer from './components/blocks/offer/Offer';
import MainCategories from './components/blocks/mainCategories/MainCategories';
import Reviews from './components/blocks/reviews/Reviews';
export default function App() {

	return (
		<>
			<Header />
			<main>
				<MainScreen />
				<BestSelling />
				<Products />
				<Offer />
				<MainCategories />
				<Reviews />
			</main>
			<Footer />
		</>
	)
}

