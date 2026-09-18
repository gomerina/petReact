import './style.scss'
import 'swiper/css';
import 'swiper/css/navigation';

import SectionHead from '../sectionHead/SectionHead'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewsCard from '../../cards/reviewsCard/ReviewsCard';
import SliderArrows from '../../UI/sliderArrows/SliderArrows';


export default function Reviews() {
    const reviews = [
        {
            id: 1,
            author: 'Emily Wilson',
            descr: "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!",
        },
        {
            id: 2,
            author: 'Sarah Thompson',
            descr: "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!",
        },
        {
            id: 3,
            author: 'Olivia Martinez',
            descr: "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!",
        },
        {
            id: 4,
            author: 'Emily Wilson',
            descr: "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!",
        },
        {
            id: 5,
            author: 'Sarah Thompson',
            descr: "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!",
        },
        {
            id: 6,
            author: 'Olivia Martinez',
            descr: "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!",
        },
    ]
    return (
        <section className='section main-reviews' >
            <div className='container'>
                <SectionHead>
                    Feedback Corner
                </SectionHead>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    navigation={{
                        prevEl: '.reviews-prev',
                        nextEl: '.reviews-next',
                    }}
                    breakpoints={{
                        //640: {
                        //    slidesPerView: 2,
                        //    spaceBetween: 20,
                        //},
                        //768: {
                        //    slidesPerView: 4,
                        //    spaceBetween: 40,
                        //},
                        //1024: {
                        //    slidesPerView: 5,
                        //    spaceBetween: 50,
                        //},
                    }}
                    modules={[Navigation]}
                    className="reviews-slider"
                >
                    {reviews.map((item) => (
                        <SwiperSlide>
                            <ReviewsCard
                                className={''}
                                author={item.author}
                                descr={item.descr}
                                key={item.id}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="centered-box">
                    <SliderArrows prevClass={'reviews-prev'} nextClass={'reviews-next'}></SliderArrows>
                </div>
            </div>
        </section >
    )
}