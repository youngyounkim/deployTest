import styles from './index.module.css'

const ProgressBar = ({ progress, ...rest }) => {
  const radius = 50; 
  const strokeWidth = 10; 
  const circumference = 2 * Math.PI * radius; 

 
  const strokeDashoffset = circumference - (progress / 7) * circumference;

  return (
    <div className={styles.progressWrapper} {...rest}>
      <svg className={styles.progressCircle} width="50" height="50" viewBox="0 0 120 120">
        <circle
          className={styles.progressBackground}
          cx="60"
          cy="60"
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className={styles.progressForeground}
          cx="60"
          cy="60"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" className={styles.progressText}  >
          {progress}/7
        </text>
      </svg>
    </div>
  );
};

export default ProgressBar


