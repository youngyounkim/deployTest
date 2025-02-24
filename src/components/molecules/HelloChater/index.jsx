import Title from '../../atoms/Title'
import styles from './index.module.css'
import hellochater from '../../../assets/image/hellochater_image.svg'

const HelloChater = ({ ...rest }) => {
    return (
        <div {...rest} className={styles.wrap}>
            <div className={styles.titlecontainer}>
                <Title  
                    type='Body01'
                    className={styles.Body_01_ExtraBold }
                    style={{ textAlign: 'left', lineHeight: 1.5, fontFamily:'extrabold' ,color: '#5FA3FC'}}
                >
                    채터님, 반가워요
                </Title>

                <Title
                    type='Title02'
                    className={styles.Title_02_ExtraBold}
                    style={{ textAlign: 'left', lineHeight: 1.5, fontFamily: 'extrabold',color: '#333333' }}
                >
                    생각하는 즐거움!<br/>이런 챕은 어때요?
                </Title>
            </div>

            <img src={hellochater} className={styles.imagewrap} alt="Hello Chater" />
        </div>
    )
}

export default HelloChater
