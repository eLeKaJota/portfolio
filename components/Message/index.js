import styles from '../../styles/Messages.module.scss';
import moment from 'moment';
import 'moment/locale/es';

const Message = (props) => {
  return (
    <div className={styles.messageBlock} key={props.key}>
      <div className={styles.messageName}>
        {props.name}
      </div>
      <div className={styles.messageEmail}>
        {props.email}
      </div>
      <div className={styles.messageMessage}>
        {props.message}
      </div>
      <div className={styles.messageDate}>
        {moment(props.date).format('DD/MM/YYYY HH:mm')}
      </div>
    </div>
  )
}

export default Message;
