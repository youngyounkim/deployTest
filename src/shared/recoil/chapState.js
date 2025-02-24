import { atom } from 'recoil';
import chap_book_image00 from '../../assets/image/chap_book_image00.svg';
import chap_book_image01 from '../../assets/image/chap_book_image01.svg';
import chap_book_image02 from '../../assets/image/chap_book_image02.svg';
import chap_book_image03 from '../../assets/image/chap_book_image03.svg';
import chap_book_image04 from '../../assets/image/chap_book_image04.svg';
import chap_book_image05 from '../../assets/image/chap_book_image05.svg';
import chap_book_image06 from '../../assets/image/chap_book_image06.svg';
import chap_book_image07 from '../../assets/image/chap_book_image07.svg';
import chap_book_image08 from '../../assets/image/chap_book_image08.svg';
import chap_book_image09 from '../../assets/image/chap_book_image09.svg';
import chap_book_image10 from '../../assets/image/chap_book_image10.svg';
import chap_book_image11 from '../../assets/image/chap_book_image11.svg';
import chap_book_image12 from '../../assets/image/chap_book_image12.svg';
import chap_book_image13 from '../../assets/image/chap_book_image13.svg';
import chap_book_image14 from '../../assets/image/chap_book_image14.svg';
import chap_book_image15 from '../../assets/image/chap_book_image15.svg';
import chap_book_image16 from '../../assets/image/chap_book_image16.svg';
import chap_book_image17 from '../../assets/image/chap_book_image17.svg';
import chap_book_image18 from '../../assets/image/chap_book_image18.svg';
import chap_book_image19 from '../../assets/image/chap_book_image19.svg';
import chap_book_image20 from '../../assets/image/chap_book_image20.svg';

export const chapState = atom({
  key: 'chapState', // unique ID (with respect to other atoms/selectors)
  default: {
    chaps: [
      {
        title: '어린이라는 세계로',
        coverImage: chap_book_image00,
        bookName: '어떤 어른',
        genre: '에세이',
        date: '2025.12.31',
        participants: 21,
        tag: ['느긋한책방손님', '에세이/시'],
      },
      {
        title: '우리 모두 천천히 달리는 연습을 해요',
        coverImage: chap_book_image01,
        bookName: '천 개의 파랑',
        genre: 'SF',
        date: '2025.02.28',
        participants: 15,
        tag: ['하이텐션북토커', 'SF'],
      },
      {
        title: '연애세포 깨우러가요',
        coverImage: chap_book_image02,
        bookName: '로맨스 도파민',
        genre: '소설',
        date: '2025.03.01',
        participants: 11,
        tag: ['리스닝요정', '소설/문학'],
      },
      {
        title:
          '디지몬이 현실 세계에 나타난다면 반려동물처럼 여겨질까, 아니면 위험한 존재로 규제될까',
        coverImage: chap_book_image03,
        bookName: '아무튼 디지몬',
        genre: '에세이/시',
        date: '2025.03.17',
        participants: 30,
        tag: ['만렙성장독서러', '에세이/시'],
      },
      {
        title: '누군가를 만나는 것은 정해진 운명일까, 단순한 우연일까?',
        coverImage: chap_book_image04,
        bookName: '트로피컬나이트',
        genre: '소설/문학',
        date: '2025.03.12',
        participants: 30,
        tag: ['하이텐션북토커', '소설/문학'],
      },
      {
        title: '어떤 음식이든 추억 보정이 들어가면 맛있어지는 걸까?',
        coverImage: chap_book_image05,
        bookName: '토마토컵라면',
        genre: '에세이/시',
        date: '2025.03.10',
        participants: 30,
        tag: ['느긋한책방손님', '에세이/시'],
      },
      {
        title: '열심히 하면 반드시 성공할까?',
        coverImage: chap_book_image06,
        bookName: '너무 잘하려고 애쓰지 마라',
        genre: '에세이/시',
        date: '2025.03.01',
        participants: 17, // 참여인원
        tag: ['느긋한책방손님', '감상', '에세이/시'],
      },
      {
        title: '성공의 기준은 누가 정하는 걸까?',
        coverImage: chap_book_image07,
        bookName: '아직 멀었다는 말',
        genre: '소설/문학',
        date: '2025.03.21',
        participants: 15, // 참여인원
        tag: ['하이텐션북토커', '토론', '소설/문학'],
      },
      {
        title: '행복을 의심하는 마음은 어디서 올까?',
        coverImage: chap_book_image08,
        bookName: '행복할 거야 이래도 되나 싶을 정도로',
        genre: '에세이/시',
        date: '2025.02.28',
        participants: 12, // 참여인원
        tag: ['만렙성장독서러', '에세이/시'],
      },
      {
        title: '짝사랑과 집착의 경계는 어디일까?',
        coverImage: chap_book_image09,
        bookName: '외사랑',
        genre: '소설/문학',
        date: '2025.05.13',
        participants: 8, // 참여인원
        tag: ['리스닝요정', '소설/문학'],
      },
      {
        title: '완벽하지 않은 사랑도 가치 있을까?',
        coverImage: chap_book_image10,
        bookName: '사랑과 결함',
        genre: '소설/문학',
        date: '2025.06.12',
        participants: 10, // 참여인원
        tag: ['느긋한책방손님', '소설/문학'],
      },
      {
        title: '디지털 세계와 현실 세계, 경계는 존재하는가?',
        coverImage: chap_book_image11,
        bookName: '아무튼, 디지몬',
        genre: '에세이/시',
        date: '2025.06.12',
        participants: 12, // 참여인원
        tag: ['느긋한책방손님', '에세이/시'],
      },
      {
        title: '신은 디자이너인가, 평론가인가?',
        coverImage: chap_book_image12,
        bookName: '쿠튀리에 신부에게 보내는 편지',
        genre: '인문/철학',
        date: '2025.05.10',
        participants: 12, // 참여인원
        tag: ['하이텐션북토커', '인문', '교양'],
      },
      {
        title: '미래는 밝을까, 그냥 블루스크린일까?',
        coverImage: chap_book_image13,
        bookName: '미래로 가는 사람들',
        genre: 'SF',
        date: '2025.04.28',
        participants: 19, // 참여인원
        tag: ['하이텐션북토커', '소설/문학', 'SF'],
      },
      {
        title: '사랑 없는 법은 독재일까, 정의일까?',
        coverImage: chap_book_image14,
        bookName: '사랑 없이 우리가 법을 말할 수 있을까',
        genre: '에세이/시',
        date: '2025.04.12',
        participants: 12, // 참여인원
        tag: ['느긋한책방손님', '소설/문학', '에세이/시'],
      },
      {
        title: '기억이 조작이면, 난 누굴까?',
        coverImage: chap_book_image15,
        bookName: '입속 지느러미',
        genre: '판타지',
        date: '2025.02.27',
        participants: 21, // 참여인원
        tag: ['만렙성장독서러', '판타지', '소설/문학'],
      },
      {
        title: '사진 속 순간은 영원할까?',
        coverImage: chap_book_image16,
        bookName: '나의 폴라 일지',
        genre: '에세이/시',
        date: '2025.03.02',
        participants: 20, // 참여인원
        tag: ['리스닝요정', '에세이/시'],
      },
      {
        title: '상실을 겪은 후, 우리는 어떻게 회복할 수 있을까?',
        coverImage: chap_book_image17,
        bookName: '바깥은 여름',
        genre: '소설/문학',
        date: '2025.05.02',
        participants: 8, // 참여인원
        tag: ['리스닝요정', '소설/문학'],
      },
      {
        title: '전쟁이 개인의 삶과 사회에 미친 영향은 무엇일까?',
        coverImage: chap_book_image18,
        bookName: '강 건너에는',
        genre: '소설/문학',
        date: '2025.06.06',
        participants: 8, // 참여인원
        tag: ['하이텐션북토커', '소설/문학'],
      },
      {
        title: '우정 VS 첫사랑: 그 선택의 순간, 우리는 무엇을 선택할까?',
        coverImage: chap_book_image19,
        bookName: '여름을 달려 너에게 점프!',
        genre: '소설/문학',
        date: '2025.07.21',
        participants: 5, // 참여인원
        tag: ['만렙성장독서러', '소설/문학', '성장'],
      },
      {
        title: '자기 자신을 받아들이는 과정에서 마주하는 어려움은 무엇일까?',
        coverImage: chap_book_image20,
        bookName: '그러나 여전히 가끔은 울 것 같은 마음으로',
        genre: '소설/문학',
        date: '2025.04.27',
        participants: 12, // 참여인원
        tag: ['느긋한책방손님', '소설/문학', '에세이/시'],
      },
    ],
  }, // default value (aka initial value)
});
