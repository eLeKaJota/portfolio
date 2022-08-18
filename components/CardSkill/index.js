import styles from '../../styles/Skills.module.scss';

const CardSkill = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLogo}>
        <a href={props.link} target="_blank" rel="noreferrer">{props.logo}</a>
      </div>
      <div className={styles.cardTitle}>
        <a href={props.link} target="_blank" rel="noreferrer">{props.title}</a>
      </div>
      <div className={styles.cardText}>
        {props.text}
      </div>
    </div>
  );
}

export default CardSkill;
