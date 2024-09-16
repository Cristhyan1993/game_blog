import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const SwiperComponent = (props) => {
    return (
        <div className='swiper-container'>
        <h1>Gallery</h1>
            <Swiper className="swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                
                    {props.gameDetails.images.gallery.map(image => {
                        return (
                            <SwiperSlide>
                            <div className='swiper-item'>
                                <img src={image.src} alt={image.alt}/>
                            </div>
                            </SwiperSlide>
                        )
                    })}

                    
                
                
                
            </Swiper>
        </div>
    )
}

export default SwiperComponent

