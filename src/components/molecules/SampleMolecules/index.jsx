import Title from '../../atoms/Title'
import Text from '../../atoms/Text'
import styles from './index.module.css'
import Button from '../../atoms/Button'

const SampleMolecules = ({ ...rest }) => {
    return (
        <div {...rest} className={styles.wrap}>
            <Title>회원가입</Title>
            <div className={styles.input_wrap}>
                <Text>아이디를 입력하세요</Text>
            </div>
            <div className={styles.input_wrap}>
                <Text>비밀번호를 입력하세요</Text>
            </div>
            <Button>버튼</Button>
        </div>
    )
}

export default SampleMolecules
