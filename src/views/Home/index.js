import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Img01 from "../Imagens/Carousel/paes01.jpg";
import Img02 from "../Imagens/Carousel/salgadinho01.jpg";
import Img03 from "../Imagens/Carousel/bolo01.jpg";
import Img04 from "../Imagens/Carousel/bolo02.jpg";
import Img05 from "../Imagens/Carousel/bolo03.jpg";
import Img06 from "../Imagens/Carousel/torta02.jpg";
import Img07 from "../Imagens/Carousel/torta03.jpg";
import "../Home/home.css";


function Home() {
    return (
        <div>
            <Navbar />
            <Swiper className="slides"
                modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                autoplay={true}
                autoplay-delay={500}
                pagination={true}
                slidesPerView={3}
                onSlideChange={() => console.log('slider change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className="item"><img className="img" src={Img01} alt="Paes"/></SwiperSlide>
                <SwiperSlide className="item"><img className="img" src={Img02} alt="Salgados"/></SwiperSlide>
                <SwiperSlide className="item"><img className="img" src={Img03} alt="Bolo"/></SwiperSlide>
                <SwiperSlide className="item"><img className="img" src={Img04} alt="Bolo"/></SwiperSlide>
                <SwiperSlide className="item"><img className="img" src={Img05} alt="Bolo"/></SwiperSlide>
                <SwiperSlide className="item"><img className="img" src={Img06} alt="Torta"/></SwiperSlide>
                <SwiperSlide className="item"><img className="img" src={Img07} alt="Torta"/></SwiperSlide>
            </Swiper>
            <Footer />
        </div>
    );
};
export default Home;
