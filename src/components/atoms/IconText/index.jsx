const IconText = ({ icon, children, ...rest }) => {
    return (
      <div {...rest} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {icon && <img src={icon} alt="icon" />}
        <p
          style={{
            textAlign: 'left',
            lineHeight: 1.5,
            fontFamily: 'Regular',
            color: '#333333',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: '100%',
            margin: 0, /* 기본 마진 제거 */
          }}
        >
          {children}
        </p>
      </div>
    );
  };
  
  export default IconText;