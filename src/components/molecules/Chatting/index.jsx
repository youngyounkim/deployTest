import styles from './index.module.css'
import profile_image01 from '../../../assets/image/profile_image01.svg'
import profile_image02 from '../../../assets/image/profile_image02.svg'
import profile_image03 from '../../../assets/image/profile_image03.svg'
import profile_image04 from '../../../assets/image/profile_image04.svg'
import profile_image05 from '../../../assets/image/profile_image05.svg'
import profile_image06 from '../../../assets/image/profile_image06.svg'
import seed_badge from '../../../assets/image/seed_badge.svg'
import tree_badgeY from '../../../assets/image/tree_badgeY.svg'
import tree_badgeB from '../../../assets/image/tree_badgeB.svg'
import menu_icon from '../../../assets/image/menu_icon.svg'
import addReaction_icon from '../../../assets/image/addReaction_icon.svg'
import chatting_icon from '../../../assets/image/chatting_icon.svg'

const Chatting = ({ profile_image, name, badge, content, reactions, comments, isMe }) => {
    return (
        <div className={`${styles.wrap} ${isMe ? styles.myChat : ''}`}>
            <div className={styles.header}>
                <div className={styles.userInfo}>
                    <img src={profile_image} alt="프로필 이미지" className={styles.profile} />
                    <h2 className={`${styles.name} ${isMe ? styles.myName : ''}`}>
                        {name} {isMe && <span className={styles.meTag}>(me)</span>}
                    </h2>
                    {badge && <img src={badge} alt="배지" className={styles.badge} />}
                </div>
                {!isMe && <img src={menu_icon} alt="메뉴 아이콘" className={styles.menuIcon} />}
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    {content.split('\n').map((line, index) => (
                        <p key={index}>{line}<br /></p>
                    ))}
                </div>
                <div className={styles.footer}>
                    <div className={styles.reactions}>
                        {reactions.map((reaction, index) => (
                            <span key={index} className={styles.emoji}>
                                {reaction.emoji} {reaction.count}
                            </span>
                        ))}
                        <img src={addReaction_icon} alt="이모지 추가" className={styles.addReaction} />
                    </div>
                    <div className={styles.comments}>
                        <p>답글 {comments}개</p>
                        <img src={chatting_icon} alt="답글 아이콘" className={styles.commentIcon} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatting;