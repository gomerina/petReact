import './style.scss'
import Timer from '../../timer/Timer'
import Btn from '../../UI/btn/Btn'
export default function Offer() {
    return (
        <section className='section offer'>
            <div className='container'>
                <div className='offer__inner'>
                    <div className='offer__img'>
                        <img src="./offers@x2.png" alt="" />
                    </div>
                    <div className='offer__content'>
                        <h2 className='offer__heading h3'>Exclusive offer</h2>
                        <div className='offer__descr'>
                            <p>
                                Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals
                            </p>
                        </div>
                        <div className='offer__timer'>
                            <Timer timestamp={1821744000} />
                        </div>
                        <Btn as="a" href="#" className="fill">BUY NOW</Btn>
                    </div>

                </div>
            </div>
        </section>
    )
}