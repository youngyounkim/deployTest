import myTaste from '../../assets/image/main_mytaste.svg';
import Title from '../../components/atoms/Title';
import Text from '../../components/atoms/Text';
import SearchBar from '../../components/molecules/SearchBar';
import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';
import Top3Card from '../../components/molecules/Top3Card';
import HomeAfStep01 from '../../components/molecules/HomeAfStep01';
import { useRecoilValue } from 'recoil';
import { chapState } from '../../shared/recoil/chapState';
import BookCard from '../../components/molecules/BookCard';
import MainButton from '../../components/molecules/MainButton';
import ViewButton from '../../components/atoms/ViewButton';
import MainTopNavbar from '../../components/atoms/MainTopNavbar';
import BottomBar from '../../components/atoms/BottomBar';
import filter_image from '../../assets/image/filter_image.svg';
import _ from 'lodash';
import { useEffect } from 'react';
import { myTasteState } from '../../shared/recoil/myTasteState';

const Home = () => {
  const { routePage } = useNavigationPage();

  const { chaps } = useRecoilValue(chapState);
  const { isOnboarding, myTastes, isTaste } = useRecoilValue(myTasteState);

  useEffect(() => {
    if (!isOnboarding) {
      routePage('/onboarding');
    }
  });

  const handlePreference = () => {
    window.scrollTo(0, 0);
    routePage('/preference');
  };

  const handlePage = (data) => {
    window.scrollTo(0, 0);
    routePage('/chapDetail', data);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.TopNavbar}>
        <MainTopNavbar></MainTopNavbar>
      </div>
      {isTaste ? (
        <HomeAfStep01
          handleClick={handlePreference}
          tags={myTastes.tags}
          name={myTastes.name}
        />
      ) : (
        <img
          src={myTaste}
          onClick={handlePreference}
          className={styles.my_taste}
        />
      )}

      <section className={styles.section_00}>
        <MainButton onClick={() => routePage('/shortTerm')} />
        <MainButton type={'longChap'} />
      </section>
      <SearchBar />

      <div className={styles.content_wrap01}>
        <Title
          type='Title02'
          className={styles.Title_02_ExtraBold}
          style={{
            textAlign: 'left',
            lineHeight: 1.5,
            fontFamily: 'extrabold',
            color: '#333333',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: '200px',
          }}
        >
          실시간 TOP 챕
        </Title>
        <Title
          type='Body01'
          className={styles.Body_01_Bold}
          style={{
            textAlign: 'left',
            lineHeight: 1.5,
            fontFamily: 'bold',
            color: '#4D4D4D',
            overflow: 'hidden',
          }}
        >
          지금 뜨고 있는 TOP 챕을 소개 할게요!
        </Title>
      </div>
      <div className={styles.Top3_Box_Container01}>
        <div className={styles.top_text_box_container}>
          <div className={styles.Top_text_box}>
            <Title
              type='SubTitle02'
              className={styles.Body_01_ExtraBold}
              style={{
                textAlign: 'left',
                lineHeight: 1.5,
                fontFamily: 'extrabold',
                color: '#333333',
                overflow: 'hidden',
              }}
            >
              단기챕
            </Title>
            <Title
              type='SubTitle02'
              className={styles.Body_01_ExtraBold}
              style={{
                textAlign: 'left',
                lineHeight: 1.5,
                fontFamily: 'extrabold',
                color: '#FFBE14',
                overflow: 'hidden',
              }}
            >
              TOP3
            </Title>
          </div>
          <ViewButton>전체보기</ViewButton>
        </div>
        <section className={styles.section_01}>
          {_.shuffle(chaps).map((el, idx) => {
            if (idx < 3) {
              return (
                <div className={styles.Top3Card}>
                <Top3Card
                  key={el.title}
                  onClick={() => handlePage(el)}
                  ranking={idx + 1}
                  title={el.title}
                  coverImage={el.coverImage}
                  bookname={el.bookName}
                  date={el.date}
                  participants={el.participants}
                  tags={el.tag}
                />
                </div>
              );
            }
            return false;
          })}
        </section>

        <div className={styles.Top3_Box_Container02}>
          <div className={styles.top_text_box_container}>
            <div className={styles.Top_text_box}>
              <Title
                type='SubTitle02'
                className={styles.Body_01_ExtraBold}
                style={{
                  textAlign: 'left',
                  lineHeight: 1.5,
                  fontFamily: 'extrabold',
                  color: '#333333',
                  overflow: 'hidden',
                }}
              >
                장기챕
              </Title>
              <Title
                type='SubTitle02'
                className={styles.Body_01_ExtraBold}
                style={{
                  textAlign: 'left',
                  lineHeight: 1.5,
                  fontFamily: 'extrabold',
                  color: '#2D87FB',
                  overflow: 'hidden',
                }}
              >
                TOP3
              </Title>
            </div>

            <ViewButton>전체보기</ViewButton>
          </div>
          <section className={styles.section_01}>
            {_.shuffle(chaps).map((el, idx) => {
              if (idx < 3) {
                return (
                  <div className={styles.Top3Card}>
                  <Top3Card
                    key={el.title}
                    onClick={() => handlePage(el)}
                    ranking={idx + 1}
                    title={el.title}
                    coverImage={el.coverImage}
                    bookname={el.bookName}
                    date={el.date}
                    participants={el.participants}
                    tags={el.tag}
                  />
                  </div>
                );
              }
              return false;
            })}
          </section>
        </div>
      </div>
      <div className={styles.content_wrap02_container}>
        <div className={styles.content_wrap02}>
          <Title
            type='Title02'
            className={styles.Title_02_Bold}
            style={{
              textAlign: 'left',
              lineHeight: 1.5,
              fontFamily: 'extrabold',
              color: '#333333',
              overflow: 'hidden',
            }}
          >
            발견
          </Title>
          <Title
            type='Body01'
            className={styles.Body_01_Bold}
            style={{
              textAlign: 'left',
              lineHeight: 1.5,
              fontFamily: 'bold',
              color: '#4D4D4D',
              overflow: 'hidden',
            }}
          >
            내 성향에 맞는 모임. 직접 찾아보세요
          </Title>
        </div>
        <div className={styles.image}>
          <img src={filter_image} alt='필터이미지' />
        </div>

        <section className={styles.section_01_discover}>
          {_.shuffle(chaps).map((el, idx) => {
            if (idx < 3) {
              return (
                <BookCard
                  key={el.title}
                  onClick={() => handlePage(el)}
                  ranking={idx + 1}
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
        </section>
      </div>
      <div className={styles.top_text_box_container_02}>
        <Title
          type='SubTitle02'
          className={styles.Title_02_Bold}
          style={{
            textAlign: 'left',
            lineHeight: 1.5,
            fontFamily: 'extrabold',
            color: '#333333',
            overflow: 'hidden',
          }}
        >
          각기 다른 사람들이
          <br />
          모여서 완성된 색다른 챕
        </Title>
        <ViewButton>전체보기</ViewButton>
      </div>
      <section className={styles.section_02}>
        {_.shuffle(chaps).map((el, idx) => {
          if (idx < 3) {
            return (
              <div className={styles.bookCard}>
              <BookCard
                key={el.title}
                onClick={() => handlePage(el)}
                ranking={idx + 1}
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
      </section>
      <BottomBar></BottomBar>
    </div>
  );
};

export default Home;
