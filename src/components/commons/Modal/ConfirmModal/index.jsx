import { useState } from 'react'
import Modal from 'react-modal'
import { useRecoilState } from 'recoil'
import { confirmModalState } from '../../../../shared/recoil/confirmModalState'
import icon from '../../../../assets/progress.png';
import icon2 from '../../../../assets/close-x-exit.png';
import Title from '../../../atoms/Title';
import { BiFontColor } from 'react-icons/bi';


const ConfirmModal = () => {
    const [modalOpen, setModalOpen] = useRecoilState(confirmModalState)
    const [isHovered, setIsHovered] = useState(false) // 기본값 false 설정

    const handleClose = () => {
        setModalOpen({ isOpen: false })
    }

    return (
        <div className='modal-overlay'>
            <Modal 
                isOpen={modalOpen.isOpen} 
                onRequestClose={handleClose} 
                ariaHideApp={false} 
                contentLabel="Pop up Message" 
                shouldCloseOnOverlayClick={false}
                style={{
                    content: {
                        width: '400px',
                        height: '300px',
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border:'0px',
                        backgroundColor:'white'
                    }
                    
                }}
            >


               <button 
                    className='wrap1'
                    onClick={handleClose}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ 
                        backgroundColor: '#ffffff', 
                      
                        paddingLeft: '300px',
                        border: '3px', 
                        
                        borderRadius: '5px' 
                    }}
                >
                     <img src={icon2} alt='exit' height='24px' width='24px'/>
                </button>






<div style={{
                    paddingBottom: '20px',
                  
                }}>
<img src={icon} alt='chatter01' height='58px' width='58px' />
</div>

<Title type='Title02' 
style={{
paddingBottom:'16px',
fontWeight: 'bold',
color:'#333333'
}}>준비중입니다</Title>


                <button 
                    onClick={handleClose}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ 
                        backgroundColor: isHovered ? '#2D87FB' : '#5FA3FC', 
                        color: 'white', 
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                        width: '335px',
                        height: '54px'
                }}>

                <Title type='Title02' 
                style={{
                color:'white',
                fontWeight: 'bold'
                }}>
                확인</Title>

                </button>


            </Modal>
        </div>
    )
}

export default ConfirmModal