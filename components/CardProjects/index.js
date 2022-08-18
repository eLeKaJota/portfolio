import styles from '../../styles/Projects.module.scss';
import {RiExternalLinkLine} from "react-icons/ri";

const CardProject = (props) => {
  return (

    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img className={styles.image} src={props.image} alt={props.title} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          {props.title}
        </div>
        <div className={styles.cardText}>
          {props.text}
        </div>
        <div className={styles.cardLink}>
          <a href={props.link} target='_blank' rel="noreferrer">{props.link} <RiExternalLinkLine /></a>
        </div>
      </div>

    </div>
  );
}

export default CardProject;
