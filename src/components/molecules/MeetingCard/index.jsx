import Title from '../../atoms/Title'
import Text from '../../atoms/Text'
import styles from './index.module.css'
import Button from '../../atoms/Button'
import Tag from '../../atoms/Tag'
import bookIcon from '../../../assets/bookIcon.svg';
import peopleIcon from '../../../assets/peopleIcon.svg';
import calendarIcon from '../../../assets/calendarIcon.svg';
import IconText from '../../atoms/IconText';
import reset from '../../../assets/reset.svg';

const MeetingCard = ({
    title, 
    coverImage, 
    bookname, 
    date, 
    participants, 
    matchRate, 
    tag,
    booktag,
    timestatus,
    ...rest }) => {

      const renderCard = () =>{
        switch (timestatus) {
          case 'live' : // 실시간진행중일 경우
            return (
              <div className={styles.wrap}> {/* 카드 전체를 감싸는 div */}
                <div className={styles.topwrap}> {/* 카드 상단 영역 div */}
                  
                  {/* 책 이름 표시 */}
                  <Title
                    type="Body02"
                    className={styles.Body_02_Bold}
                    style={{ textAlign: 'center', lineHeight: 1.5, fontFamily: 'bold', color: '#7A5900' }}
                  >
                    {bookname}
                  </Title>
                  {/* 토론주제 표시 */}
                  <Title
                    type="Body02"
                    className={styles.Body_02_Bold}
                    style={{ textAlign: 'center', lineHeight: 1.5, fontFamily: 'bold', color: '#333333' , whiteSpace: 'pre-line'}}
                  >
                    {title}
                  </Title>
                </div>
                <div className={styles.bottomwrap}> {/* 카드 하단 영역 div */}
                  <div className={styles.bookImage}> {/* 책 표지 이미지 영역 div */}
                    <img src={coverImage} alt={bookname} />
                  </div>
                  <div className={styles.info}>  {/* 카드 하단 정보 영역 div */}
                    <div className={styles.tagwrap}>
                      {tag.map((t, index) => (
                        <Tag key={index} type="yellow">
                          #{t}
                        </Tag>
                      ))}
                      {booktag.map((t, index) => (
                        <Tag key={index} type="gray">
                          #{t}
                        </Tag>
                      ))}
                    </div>
                    {/* 아이콘과 텍스트 영역 div */}
                    <div className={styles.iconText}>
                       {/* 달력 아이콘과 날짜 표시 */}
                      <IconText className={styles.icon1} icon={calendarIcon}>
                        {date}
                      </IconText>
                      {/* 사람 아이콘과 참여자 수 표시 */}
                      <IconText className={styles.icon1} icon={peopleIcon}>
                        {participants}명 참여 중
                      </IconText>
                    </div>
                    {/* 성향일치율 영역 div */}
                    <div className={styles.matchRate}>
                      {/* 성향일치율 텍스트 표시 */}
                      <Title
                        type="Caption01"
                        className={styles.Caption_01_Regular}
                        style={{ lineHeight: 1.5, fontFamily: 'Regular', color: '#666666' }}
                      >
                        성향 일치율

                         {/* 성향일치율 게이지바 영역 div */}
                      </Title>
                      <div className={styles.progressBarContainer}>
                        <div className={styles.progressBar}>
                          <div
                            className={styles.progressFill}
                            style={{ width: `${matchRate}%` }}
                          />
                        </div>
                        {/* 성향일치율 퍼센트 숫자 표시 */}
                        <Title type="Caption02" className={styles.Caption_02_Regular}
                         style={{  fontFamily: 'bold', color: '#000000' }}>
                          {matchRate}%
                        </Title>
                      </div>
                    </div>
                  </div>
                  {/* 실시간 박스 영역 div */}
                  <div className={styles.liveContainer}>
                     실시간
                    </div>
                    {/* 새로고침 버튼  */}
                  <div className={styles.buttonContainer2}>
                    <img src={reset} alt="reset" />
                  </div>
                </div>
              </div>
            );

            case 'coming':  // 진행예정일 경우
              return (
                <div className={styles.wrap}> {/* 카드 전체를 감싸는 div */}
                  <div className={styles.topwrap}>{/* 카드 상단 영역 div */}
                     {/* 책 이름 표시 */}
                    <Title
                      type="Body02"
                      className={styles.Body_02_Bold}
                      style={{ textAlign: 'center', lineHeight: 1.5, fontFamily: 'bold', color: '#7A5900' }}
                    >
                      {bookname}
                    </Title>

                    {/* 토론주제 표시 */}
                    <Title
                      type="Body02"
                      className={styles.Body_02_Bold}
                      style={{ textAlign: 'center', lineHeight: 1.5, fontFamily: 'bold', color: '#333333' , whiteSpace: 'pre-line' }}
                    >
                      {title}
                    </Title>
                  </div>
                  <div className={styles.bottomwrap}> {/* 카드 하단 영역 div */}
                    <div className={styles.bookImage}>{/* 책 표지 이미지 영역 div */}
                      <img src={coverImage} alt={bookname} />
                    </div>
                    <div className={styles.info}>{/* 카드 하단 정보 영역 div */}
                      <div className={styles.tagwrap}>
                        {tag.map((t, index) => (
                          <Tag key={index} type="yellow">
                            #{t}
                          </Tag>
                        ))}
                        {booktag.map((t, index) => (
                          <Tag key={index} type="gray">
                            #{t}
                          </Tag>
                        ))}
                      </div>
                       {/* 아이콘과 텍스트 영역 div */}
                      <div className={styles.iconText}>
                         {/* 달력 아이콘과 날짜 표시 */}
                        <IconText className={styles.icon1} icon={calendarIcon}>
                          {date}
                        </IconText>
                         {/* 사람 아이콘과 참여자 수 표시 */}
                        <IconText className={styles.icon1} icon={peopleIcon}>
                          {participants}명이 의견을 남겼어요
                        </IconText>
                      </div>
                      {/* 성향일치율 영역 div */}
                      <div className={styles.matchRate}>
                        <Title
                          type="Caption01"
                          className={styles.Caption_01_Regular}
                          style={{ lineHeight: 1.5, fontFamily: 'Regular', color: '#666666' }}
                        >
                          성향 일치율
                        </Title>
                         {/* 성향일치율 게이지바 영역 div */}
                        <div className={styles.progressBarContainer}>
                          <div className={styles.progressBar}>
                            <div
                              className={styles.progressFill}
                              style={{ width: `${matchRate}%` }}
                            />
                          </div>
                          <Title type="Caption02" className={styles.Caption_02_Regular}
                           style={{  fontFamily: 'bold', color: '#000000' }}>
                            {matchRate}%
                          </Title>
                        </div>
                      </div>
                    </div>
                    {/* 진행예정정 박스 영역 div */}
                    <div className={styles.ComingContainer}>
                     진행 예정
                    </div>
                     {/* 새로고침 버튼  */}
                    <div className={styles.buttonContainer2}>
                    <img src={reset} alt="reset" />
                  </div>
                  </div>
                </div>
              );
            default:
              return null; // 유효하지 않은 timestatus인 경우
          }
        };
      
        return renderCard();
      };

export default MeetingCard


