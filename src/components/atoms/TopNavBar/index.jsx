import styles from './index.module.css';
import { IoIosArrowBack } from "react-icons/io";  // 뒤로가기 아이콘
import { HiOutlineSearch } from "react-icons/hi"; // 돋보기 아이콘
import { IoMdNotificationsOutline } from "react-icons/io"; // 알림 아이콘
import { IoPaperPlaneOutline } from "react-icons/io5"; // 개인 채팅 아이콘
import { MdMoreVert } from "react-icons/md"; // 점세개 아이콘
import { FiSettings } from "react-icons/fi"; // 설정 아이콘
import useNavigationPage from '../../../hooks/useNavigationPage';

const TopNavBar = ({ navtitle='', search, bell, chat, dots, settings, children, ...rest }) => {

    const { routePage } = useNavigationPage();

    const handler = () => {
        routePage(-1);
    };

    return (
        <div {...rest} className={styles.wrap}>
            {children}
            <div className={styles.left}>
                <button onClick={handler} className={styles.backButton}>
                    <IoIosArrowBack />
                </button>
                <h1 className={styles.title}>{navtitle}</h1>
            </div>
            <div className={styles.icons}>
                {search && <span className={styles.icon}><HiOutlineSearch /></span>}
                {bell && <span className={styles.icon}><IoMdNotificationsOutline /></span>}
                {chat && <span className={styles.icon}><IoPaperPlaneOutline /></span>}
                {dots && <span className={styles.icon}><MdMoreVert /></span>}
                {settings && <span className={styles.icon}><FiSettings /></span>}
            </div>
        </div>
    )
}

export default TopNavBar;
