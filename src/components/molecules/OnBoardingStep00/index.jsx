import React, { useState } from 'react';
import slide_01 from '../../../assets/image/slide_01.svg';
import slide_02 from '../../../assets/image/slide_02.svg';
import slide_03 from '../../../assets/image/slide_03.svg';
import slide_04 from '../../../assets/image/slide_04.svg';
import Button from '../../atoms/Button';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.css';
import './styles.css';

const OnBoardingStep00 = ({ handlePage }) => {
  const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 슬라이드 인덱스

  const settings = {
    beforeChange: (current, next) => setActiveIndex(next), // 슬라이드 변경 시 activeIndex 업데이트

    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    customPaging: (i) => (
      <div
        style={{
          slidesToShow: 1,

          width: '10px',
          height: '10px',
          borderRadius: '50%',
          centerMode: false,
          cursor: 'pointer',

          backgroundColor: i === activeIndex ? '#5FA3FC' : '#E6E6E6', // 현재 슬라이드에 따라 색상 변경
        }}
      ></div>
    ),
  };

  const slides = [
    // 슬라이드에 표시할 이미지 정보 배열
    { src: slide_01, alt: '앱 이용 안내 1' },
    { src: slide_02, alt: '앱 이용 안내 2' },
    { src: slide_03, alt: '앱 이용 안내 3' },
    { src: slide_04, alt: '앱 이용 안내 4' },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.slider_wrap}>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.src}
              className={styles.img}
              alt={slide.alt}
            />
          ))}
        </Slider>
      </div>
      <div className={styles.Buttonss}>
        <Button onClick={handlePage}>로그인</Button>
        <Button
          onClick={handlePage}
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid white',
          }}
        >
          회원가입
        </Button>
      </div>
    </div>
  );
};
export default OnBoardingStep00;
