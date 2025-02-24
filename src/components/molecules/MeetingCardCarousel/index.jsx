 
import React, { useState } from 'react';
 
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.css';
import MeetingCard from '../MeetingCard';
import bookcover24 from '../../../assets/bookcover24.svg';
import bookcover23 from '../../../assets/bookcover23.svg';

const MeetingCardCarousel = ({ nextStep }) => {


  const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 슬라이드 인덱스 
  
    const settings = {
  
      beforeChange: (current, next) => setActiveIndex(next), // 슬라이드 변경 시 activeIndex 업데이트
  
  
      dots: true,
      infinite: false,
      speed: 500,
      variableWidth: false,
      slidesToShow: 1,
      centerMode:false,
      slidesToScroll: 1,
      
      // 커스텀 도트 스타일 설정
      customPaging: (i) => (
        <div
          style={{
             
            
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            
            cursor: 'pointer',
            
            backgroundColor: i === activeIndex ? '#FFCC47' : '#E6E6E6', // 현재 슬라이드에 따라 색상 변경
          }}
        ></div>
      ),
    };


 // 실시간 카드 데이터
  const liveMeeting = {
    timestatus: 'live',
    title: '만약 단 하루, 과거로 돌아갈 수있다면 \n 누구를 만나고 싶나요?',
    bookname: '[세상의 마지막 기차역]',
    coverImage:bookcover23,
    date: '지금 진행 중',
    participants: 21,
    matchRate: 90,
    tag: ['느긋한 책방 손님', '소설'],
    booktag: ['감동'],
  };
 // 진행예정 카드 데이터
  const comingMeeting = {
    timestatus: 'coming',
    title: '누군가와 함께하는 것이 중요한 이유는 \n 무엇일까요?',
    bookname: '[너의 췌장을 먹고 싶어]',
    coverImage: bookcover24,
    date: '25.02.17(월)∙17시',
    participants: 21,
    matchRate: 85,
    tag: ['느긋한 책방 손님', '소설'],
    booktag: ['감상'],
  };

   




  return (
  
    <div className={styles.wrap} >
      
        <Slider {...settings}> 
        <div className={styles.slideItem}>
            {/* 실시간진행모임 */}
            <MeetingCard {...liveMeeting} />
          </div>
          <div className={styles.slideItem}>
            {/* 진행예정모임 */}
            <MeetingCard {...comingMeeting} />
          </div>
        </Slider>
        </div>
        
  );
};

export default MeetingCardCarousel;
