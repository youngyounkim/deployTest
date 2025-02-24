import Title from '../../atoms/Title';
import styles from './index.module.css';
import Button from '../../atoms/Button';
import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';
import Tag from '../../atoms/Tag';
import result_selfie from '../../../assets/image/result_selfie.svg';
import result_selfie_fantasy from '../../../assets/image/result_selfie_fantasy.svg';
import result_hipster_fantasy from '../../../assets/image/result_hipster_fantasy.svg';
import result_infohunter_fantasy from '../../../assets/image/result_infohunter_fantasy.svg';
import result_onebite_fantasy from '../../../assets/image/result_onebite_fantasy.svg';
import useNavigationPage from '../../../hooks/useNavigationPage';
import BookCard from '../../../components/molecules/BookCard';
import book_image_lasttrain from '../../../assets/image/book_image_lasttrain.svg';
import book_image_jump from '../../../assets/image/book_image_jump.svg';
import book_image_your from '../../../assets/image/book_image_your.svg';
import book_image_adult from '../../../assets/image/book_image_adult.svg';
import { useSetRecoilState } from 'recoil';
import { myTasteState } from '../../../shared/recoil/myTasteState';

const images = [
  result_selfie_fantasy,
  result_hipster_fantasy,
  result_infohunter_fantasy,
  result_onebite_fantasy,
];

const bookType = [
  {
    type: 0,
    title: '만렙 성장 독서러',
    content: '장기적으로 함께 읽으며 배움을 나누는 독서러',
  },
  {
    type: 1,
    title: '하이텐션 북토커',
    content: '책에 대한 의견을 적극적으로 공유하는 타입',
  },
  {
    type: 2,
    title: '느긋한 책방 손님',
    content: '부담 없이 읽고 가볍게 소감을 나누는 스타일',
  },
  {
    type: 3,
    title: '리스닝 요정',
    content: '조용히 사색하며 남들의 의견을 경청하는 스타일',
  },
];

const favoriteBooks = [
  {
    type: 0,
    title: '소설/문학',
    content: '1984, 노인과 바다',
  },
  {
    type: 1,
    title: '판타지',
    content: '포스 윙, 해리 포터와 마법사의 돌',
  },
  {
    type: 2,
    title: 'SF',
    content: '마션,  천 개의 파랑',
  },
  {
    type: 3,
    title: '미스터리',
    content: '셜록 홈즈 시리즈, 다빈치 코드',
  },
  {
    type: 4,
    title: '자기계발',
    content: '세이노의 가르침, 자존감 수업',
  },
  {
    type: 5,
    title: '사회/경제',
    content: '자본론 , 총, 균, 쇠',
  },
  {
    type: 6,
    title: '에세이/시',
    content: '내가 읽은 책들, 고백',
  },
  {
    type: 7,
    title: '인문/철학',
    content: '니코마코스 윤리학,존재와 시간',
  },
  {
    type: 8,
    title: '심리학',
    content: '마음의 법칙,생각에 관한 생각',
  },
];

const myBookTypes = [
  {
    type: 0,
    title: '감성셀피독서가!',
    contentTitle: '책 한줄이 내 하루 분위기를 좌우함...',
    content: `책 속 감정에 몰입하는 타입!\n내가 느낀 감정, 문장을 기록하면서\n그 순간을 나만의 감성으로 담아내는 게 중요해요.\n책을 읽는 것도, 내 감정을 기록하는 것도 모두 예술~`,
  },
  {
    type: 1,
    title: '사색의 힙스터!',
    contentTitle: `이 문장, 의미 해석만 세 시간째...`,
    content: `책 한 줄에서도 철학을 찾는 타입!\n한 권을 빨리 읽는 것보다,\n한 문장을 곱씹으며세상과 연결 짓는 게 더 중요하죠.\n오늘도 깊은 사색 속으로~`,
  },
  {
    type: 2,
    title: '인포 헌터!',
    contentTitle: '이 책에서 얻을 수 있는 핵심은 이거닷!!',
    content:
      '책을 읽을 때, 핵심만 파악하고 실용적인 정보만 쫙!\n최신 트렌드나 정보가 중요하죠. 길게 읽는 것보다는\n중요한 부분만 정확하게 건져내는 게 내 스타일!',
  },
  {
    type: 3,
    title: '한입 독서러!',
    contentTitle: '한 권만 읽기엔 세상이 너무 넓음',
    content: `하나의 책을 완전히 끝내는 것보다는\n여러 책을 가볍게 맛보는 게 내 스타일!\n책의 핵심만 빠르게 짚어보며,\n다양한 책을 동시에 읽는 재미를 느껴요.`,
  },
];

const OnBoardingStep11 = ({ items, beforeStep, resetStep }) => {
  const { routePage } = useNavigationPage();
  const setMyTaste = useSetRecoilState(myTasteState);

  const myStyle = myBookTypes.find((el) => {
    if (el.type === items[6]) {
      return true;
    }
    return false;
  });
  const { type, title, contentTitle, content } = myStyle;

  const myBookStyle = favoriteBooks.find((el) => {
    if (el.title === items[4][0]) {
      return true;
    }
    return false;
  });

  const myBookType = bookType.find((el) => {
    if (el.type === items[8]) {
      return true;
    }
    return false;
  });

  const handleNextStep = () => {
    const result = {
      name: items[2],
      tags: [title, myBookType.title, myBookStyle.title],
    };
    setMyTaste((prev) => {
      return { ...prev, myTastes: result, isTaste: true };
    });
    routePage('/', { ...myStyle });
  };

  return (
    <div
      className={
        myBookType.type === 0 || myBookType.type === 1
          ? styles.wrap_00
          : styles.wrap_01
      }
    >
      <FavoriteTopNavbar
        onClick={beforeStep}
        style={{
          margin: '0',
          padding: '0',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        나의 독서 스타일은?
      </FavoriteTopNavbar>
      <div className={styles.result_title}>
        <img src={result_selfie} alt='챕챕이 이미지' />
        <div className={styles.title_text_box}>
          <Title
            type='Body02'
            style={{
              color: '#056BF0',
              fontWeight: '700',
              textAlign: 'center',
              lineHeight: '1.5',
            }}
          >
            나의 독서성향 유형은
          </Title>
          <Title
            style={{
              fontSize: '32px',
              fontFamily: 'extraBold',
              textAlign: 'center',
              lineHeight: '1.5',
            }}
          >
            {title}
          </Title>
        </div>
      </div>
      {/* 첫번째 말풍선 상단 */}
      <div className={styles.top_con}>
        {/* 성향 태그 부분 */}
        <div className={styles.chip_container}>
          {/* 회색 태그, 노란 태그 안에 글자 테스트에 따라 바뀜 */}
          <Tag
            type='skyblue'
            style={{
              fontWeight: '700',
              fontSize: '12px',
              color: '#056BF0',
              textAlign: 'center',
              lineHeight: '1.5',
              margin: '0',
            }}
          >
            # 감성셀피독서가
          </Tag>
          <Tag
            type='gray'
            style={{
              fontWeight: '700',
              fontSize: '12px',
              color: '#666666',
              textAlign: 'center',
              lineHeight: '1.5',
              margin: '0',
            }}
          >
            # 책장르
          </Tag>
          <Tag
            type='yellow'
            style={{
              fontWeight: '700',
              fontSize: '12px',
              color: '#7A5900',
              textAlign: 'center',
              lineHeight: '1.5',
              margin: '0',
            }}
          >
            # 독서모임성향
          </Tag>
        </div>
        <div className={styles.text_box1}>
          <Title
            type='SubTitle02'
            style={{
              fontFamily: 'extraBold',
              textAlign: 'center',
              color: '#000000',
              lineHeight: '1.5',
              marginBottom: '20px',
            }}
          >
            "{contentTitle}"
          </Title>
          <Title
            type='Body02'
            style={{
              fontFamily: 'Bold',
              textAlign: 'center',
              color: '#999999',
              lineHeight: '1.5',
            }}
          >
            <pre>{content}</pre>
          </Title>
        </div>
        {/* /첫 번쨰 말풍선 하단/ */}
        <div className={styles.text_box2}>
          <div className={styles.metting}>
            <Title
              type='Body01'
              style={{
                color: '#056BF0',
                fontFamily: 'Bold',
                textAlign: 'center',
                lineHeight: '1.5',
                marginBottom: '20px',
              }}
            >
              당신의 독서 모임 성향은?
            </Title>
            <Title
              type='Body02'
              style={{
                color: '#000000',
                fontFamily: 'extraBold',
                textAlign: 'center',
                lineHeight: '1.5',
                marginBottom: '8px',
              }}
            >
              {myBookType.title}
            </Title>
            <Title
              type='Caption01'
              style={{
                color: '#666666',
                fontFamily: 'regular',
                textAlign: 'center',
                lineHeight: '1.5',
              }}
            >
              {myBookType.content}
            </Title>
          </div>
          <div className={styles.line}></div>
          <div className={styles.genre}>
            <Title
              type='Body01'
              style={{
                color: '#056BF0',
                fontFamily: 'Bold',
                textAlign: 'center',
                lineHeight: '1.5',
                marginBottom: '20px',
              }}
            >
              당신의 선호 장르는?
            </Title>
            <Title
              type='Body02'
              style={{
                color: '#000000',
                fontFamily: 'extraBold',
                textAlign: 'center',
                lineHeight: '1.5',
                marginBottom: '8px',
              }}
            >
              {myBookStyle.title}
            </Title>
            <Title
              type='Caption01'
              style={{
                color: '#666666',
                fontFamily: 'regular',
                textAlign: 'center',
                lineHeight: '1.5',
              }}
            >
              ex. {myBookStyle.content}
            </Title>
          </div>
        </div>
      </div>
      <div className={styles.middle_con}>
        <img src={images[type]} alt='환상&환장' />
      </div>
      <div className={styles.bottom_con}>
        <div className={styles.text_box3}>
          <Title
            type='Body01'
            style={{
              fontFamily: 'Bold',
              lineHeight: '1.5',
              textAlign: 'center',
              marginBottom: '10px',
            }}
          >
            "{myBookType.title}"인
            <br />
            채터님에게 딱 맞는
            <span
              className={
                myBookType.type === 0 || myBookType.type === 1
                  ? styles.book_type_highlight_00
                  : styles.book_type_highlight_01
              }
            >
              &nbsp;
              {myBookType.type === 0 || myBookType.type === 1
                ? '장기챕'
                : '단기챕'}
              &nbsp;
            </span>
            추천해드려요
          </Title>
          <Title
            type='Caption01'
            style={{
              fontFamily: 'regular',
              lineHeight: '1.5',
              textAlign: 'center',
              color: '#666666',
            }}
          >
            {myBookType.type === 0 || myBookType.type === 1 ? (
              <>
                <span style={{ fontFamily: 'Bold' }}>장기챕</span>이란?
                <br />
                같은 멤버들과 정해진 일정에 맞춰 책을 읽고
                <br />
                깊이 있는 대화를 나누는 모임
              </>
            ) : (
              <>
                <span style={{ fontFamily: 'Bold' }}>단기챕</span>이란?
                <br />
                특정 책이나 주제로 가볍게 이야기 나누는 모임
              </>
            )}
          </Title>
        </div>
        <div className={styles.meeting_components}>
          <div className={styles.temp}>
            {myBookType.type === 0 || myBookType.type === 1 ? (
              <>
                <div className={styles.longchap}>
                <div className={styles.bookCard}>
                  <BookCard
                    title='한 줄의 여운'
                    coverImage={book_image_jump}
                    bookname='여름을 달려 너에게 점프!'
                    date='매주 금요일∙오후'
                    participants={'12/20'}
                    matchRate={96}
                    tag={['만렙성장독서가', '소설/문학']}
                  />
                  </div>
                  <div className={styles.bookCard}>
                  <BookCard
                    title='독서를합시다'
                    coverImage={book_image_adult}
                    bookname='어떤 어른'
                    date='매주 토요일∙야간'
                    participants={'8/20'}
                    matchRate={88}
                    tag={['리스닝 요정', '에세이/시']}
                  />
                </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.shortchap}>
                <div className={styles.bookCard}>
                  <BookCard
                    title='만약 단 하루, 과거로 돌...'
                    coverImage={book_image_lasttrain}
                    bookname='세상의 마지막 기차역'
                    date='지금 진행 중'
                    participants={22}
                    matchRate={96}
                    tag={['느긋한책방손님', '소설/문학']}
                  />
                  </div>
                  <div className={styles.bookCard}>
                  <BookCard
                    title='누군가와 함께하는 것이...'
                    coverImage={book_image_your}
                    bookname='너의 췌장을 먹고 싶어'
                    date='25.02.21(금)∙19시'
                    participants={21}
                    matchRate={88}
                    tag={['느긋한책방손님', '소설/문학']}
                  />
                </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={styles.button_box}>
        <div className={styles.button_inner}>
          <Button onClick={handleNextStep}>심오한 이야기 나누러 가기</Button>
        </div>
        <Title
          type='Body02'
          style={{
            fontFamily: 'regular',
            color: '#808080',
            paddingBottom: '20px',
            cursor: 'pointer',
          }}
          onClick={resetStep}
        >
          테스트 다시하기
        </Title>
      </div>
    </div>
  );
};

export default OnBoardingStep11;
