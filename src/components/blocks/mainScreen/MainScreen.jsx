import './style.scss'
import Btn from '../../UI/btn/Btn'
import mainScreenImg from '/ms@x2.jpg'
export default function mainScreen() {
    const mainScreenHeading = 'Discover and Find Your Own Fashion!'
    const mainScreenDescr = 'Explore our curated collection of stylish clothing and accessories tailored to your unique taste.'
    return (
        <div className="main-screen">
            <div className='container'>
                <div className='main-screen__row'>
                    <div className='main-screen__content'>
                        <h1 className='main-screen__heading'>
                            {mainScreenHeading}
                        </h1>
                        <div className='main-screen__descr'>
                            <p>
                                {mainScreenDescr}
                            </p>
                        </div>
                        <div className='main-screen__mobile'>
                            <div className='main-screen__img'>
                                <img src={mainScreenImg} alt="" />
                            </div>
                        </div>
                        <Btn as="a" href="#" className="fill">Explore Now</Btn>
                    </div>
                    <div className='main-screen__img'>
                        <img src={mainScreenImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}