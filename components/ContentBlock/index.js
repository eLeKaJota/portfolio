import styles from '../../styles/Content.module.scss';

export default function ContentBlock(props) {
  return (
    <div className={styles.contentBlock}>
      <div className={styles.blockTitle}>
        <h5>{props.title}</h5>
      </div>
      <div className={`${styles.blockContent}`}>
        <div className={`${styles.containerArrowRc} ${styles.containerArrow}`}></div>
          {props.content}
        </div>
    </div>
  );
}
