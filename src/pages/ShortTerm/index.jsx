import { useState } from 'react'; // useState 추가
import BottomBar from '../../components/atoms/BottomBar';
import Chips from '../../components/atoms/Chips';
import Title from '../../components/atoms/Title';
import TopNavBar from '../../components/atoms/TopNavBar';
import BookCard from '../../components/molecules/BookCard';
import HelloChater from '../../components/molecules/HelloChater';
import LiveShortChapCardM from '../../components/molecules/LiveShortChapCardM';
import MeetingCardCarousel from '../../components/molecules/MeetingCardCarousel';
import ToastBar from '../../components/molecules/ToastBar';
import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';
import chevron_down from '../../assets/chevron_down.svg';
import rightarrow from '../../assets/rightarrow.svg';
import ViewButton from '../../components/atoms/ViewButton';

import { useRecoilValue } from 'recoil';
import { chapState } from '../../shared/recoil/chapState';
import _ from 'lodash';

const ShortTerm = () => {
  const { routePage } = useNavigationPage();
  const { chaps } = useRecoilValue(chapState);
  
 // Chips의 클릭 상태를 관리하는 상태
 const [pressedChips, setPressedChips] = useState([]);


  // Chips 클릭 핸들러
  const handleChipClick = (chip) => {
    if (pressedChips.includes(chip)) {
      // 이미 클릭된 Chips라면 제거
      setPressedChips(pressedChips.filter((c) => c !== chip));
    } else {
      // 클릭되지 않은 Chips라면 추가
      setPressedChips([...pressedChips, chip]);
    }
  };

  const handlePage = (data) => {
    window.scrollTo(0, 0);
    routePage('/chapDetail', data);
  };

  return (
    <div className={styles.wrap}>
      <TopNavBar navtitle='단기챕' search={true} bell={true} chat={true} />
      <div className={styles.wrap_container}>
        <div className={styles.topcontentWrap}>
          <section className={styles.section_01}>
            <HelloChater />
          </section>
          <ToastBar />
        </div>
        <div className={styles.carousel}>
          <MeetingCardCarousel />
        </div>

        <div className={styles.keywordcontentWrap}>
          <div className={styles.keywordTitleWrap}>
            <Title
              type='SubTitle02'
              className={styles.SubTitle_02_ExtraBold}
              style={{
                textAlign: 'left',
                lineHeight: 1.5,
                fontFamily: 'Extrabold',
                color: '#000000',
                alignSelf: 'flex-start',
              }}
            >
              성향에 맞는 챕을 <br></br>키워드로 찾아보세요!
            </Title>
            
            <ViewButton>전체보기</ViewButton>
          </div>
          <div className={styles.chipswrap}>
          <Chips
            isPressed={pressedChips.includes('#느긋한책방손님')} // 클릭 상태 전달
            onClick={() => handleChipClick('#느긋한책방손님')} // 클릭 핸들러
          >
            #느긋한책방손님
          </Chips>
          <Chips
            isPressed={pressedChips.includes('#소설/문학')}
            onClick={() => handleChipClick('#소설/문학')}
          >
            #소설/문학
          </Chips>
          <Chips
            isPressed={pressedChips.includes('#판타지')}
            onClick={() => handleChipClick('#판타지')}
          >
            #판타지
          </Chips>
          </div>
          <div className={styles.soonBookCardWrap}>
            {_.shuffle(chaps).map((el, idx) => {
              if (idx < 3) {
                console.log('el', el);
                return (
                  <div className={styles.bookCard}>
                  <BookCard
                    key={el.title}
                    onClick={() => handlePage(el)}
                    title={el.title}
                    coverImage={el.coverImage}
                    bookname={el.bookName}
                    date={el.date}
                    participants={el.participants}
                    tag={el.tag}
                    matchRate={97}
                  />
                  </div>
                );
              }
              return false;
            })}
          </div>
        </div>
        <div className={styles.livecontentWrap}>
          <div className={styles.ContentTitleWrap}>
            <Title
              type='SubTitle02'
              className={styles.SubTitle_02_ExtraBold}
              style={{
                textAlign: 'left',
                lineHeight: 1.5,
                fontFamily: 'Extrabold',
                color: '#000000',
                alignSelf: 'flex-start',
              }}
            >
              지금 진행 중인 단기챕
            </Title>
            <ViewButton>전체보기</ViewButton>
          </div>
          <div className={styles.LiveShortChapCardMWarp}>
            <LiveShortChapCardM></LiveShortChapCardM>
            <LiveShortChapCardM></LiveShortChapCardM>
          </div>
        </div>

        <div className={styles.sooncontentWrap}>
          <div className={styles.ContentTitleWrap}>
            <Title
              type='SubTitle02'
              className={styles.SubTitle_02_ExtraBold}
              style={{
                textAlign: 'left',
                lineHeight: 1.5,
                fontFamily: 'Extrabold',
                color: '#000000',
                alignSelf: 'flex-start',
              }}
            >
              잠시 후 챕이 시작됩니다!
            </Title>
            <ViewButton>전체보기</ViewButton>
          </div>
          <div className={styles.LiveBookCardWarp}>
            {_.shuffle(chaps).map((el, idx) => {
              if (idx < 3) {
                console.log('el', el);
                return (
                  <div className={styles.bookCard}>
                  <BookCard
                    key={el.title}
                    onClick={() => handlePage(el)}
                    title={el.title}
                    coverImage={el.coverImage}
                    bookname={el.bookName}
                    date={el.date}
                    participants={el.participants}
                    tag={el.tag}
                  />
                  </div>
                );
              }
              return false;
            })}
          </div>
        </div>

        <div className={styles.calendercontentWrap}>
          <div className={styles.ContentTitleWrap}>
            <Title
              type='SubTitle02'
              className={styles.SubTitle_02_ExtraBold}
              style={{
                textAlign: 'left',
                lineHeight: 1.5,
                fontFamily: 'Extrabold',
                color: '#000000',
                alignSelf: 'flex-start',
              }}
            >
              챕 캘린더
            </Title>
            <div className={styles.Calenderdatefilter}>
              <span>2025</span>
              <img src={chevron_down} />
            </div>
          </div>
          <div className={styles.calenderdatewrap}>
            <img src='calenderdate.svg' />
          </div>
          <div className={styles.LiveBookCardWarp02}>
            {_.shuffle(chaps).map((el, idx) => {
              if (idx < 3) {
                return (
                  <BookCard
                    onClick={() => handlePage(el)}
                    key={el.title}
                    title={el.title}
                    coverImage={el.coverImage}
                    bookname={el.bookName}
                    date={el.date}
                    participants={el.participants}
                    tag={el.tag}
                  />
                );
              }
              return false;
            })}
          </div>
        </div>
        <BottomBar></BottomBar>
      </div>
    </div>
  );
};

export default ShortTerm;

//HelloChater
//ToastBar
//MeetingCardCarousel
//BookCard
//LiveShortChapCardM
//챕캘린더는 사진
//BookCard
//BottomBar
