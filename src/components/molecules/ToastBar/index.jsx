
import styles from './index.module.css'
import information from '../../../assets/information.png'
import close from '../../../assets/close-x-exit.png'

const ToastBar = ({ ...rest }) => {
    return (

        <div {...rest} className={styles.wrap1}>


            <div {...rest} className={styles.wrap2}>
            <div {...rest} className={styles.image1}><img src={information} alt='information' height='20px' width='20px' /></div>
            <div className={styles.Body_02_Bold }>단기챕이란?</div>

            
            <div><button {...rest} className={styles.button1}><img src={close} alt='close' height='20px' width='20px' /></button></div>
            </div>
        

            <p className={styles.wrap3}>
            <div className={styles.Caption_01_Regular}>단기챕은 특정 책을 주제로 의견을 공유하는 모임이에요.<br/>
            마음에 드는 책을 골라 주제에 대한 의견을 남겨봐요!</div></p>
        </div>

    )
}

export default ToastBar
