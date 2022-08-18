import styles from '../../styles/Contact.module.scss';
import {useEffect, useState} from "react";
import message from "../Message";
import {createContact} from "../../services/contact.service";

const Contact = () => {
  const [formMessage, setFormMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    setFormMessage('');
    setFormSent(false);
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('name', e.target.name.value);
    console.log('email', e.target.email.value);
    console.log('message', e.target.message.value);
    if (e.target.name.value === '' || e.target.email.value === '' || e.target.message.value === '') {
      setFormMessage('Es necesario completar todos los campos');
      return;
    }
    if (e.target.name.value === undefined || e.target.email.value === undefined || e.target.message.value === undefined) {
      setFormMessage('Es necesario completar todos los campos');
      return;
    }
    if (e.target.name.value === null || e.target.email.value === null || e.target.message.value === null) {
      setFormMessage('Es necesario completar todos los campos');
      return;
    }
    const message = await createContact({
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    });

    console.log('message', message);
    if (message.data.status === 201) {
      setFormSent(true);
      setFormMessage('Mensaje enviado, muchas gracias. Trataré de contestarte lo antes posible.');
    } else {
      setFormSent(false);
      setFormMessage('Error al enviar el mensaje, intente nuevamente');
    }
  }

  return (
    <div id='contact' className={styles.content}>
      <div className={'col'}>
      Si quieres contactar conmigo, puedes hacerlo a través del email: <a href='mailto:cclaguia@gmail.com'>cclaguia@gmail.com</a> o directamente a través del formulario:
      </div>
        <form className={styles.form} action="javascript:void(0);" onSubmit={handleSubmit}>
          <div className={styles.formRow}>
              <input type="text" name='name' className={styles.formInput} id="name" placeholder="Nombre" />
          </div>
          <div className={styles.formRow}>
              <input type="email" name='email' className={styles.formInput} id="email" placeholder="Email" />
          </div>
          <div className={styles.formRow}>
              <textarea className={styles.formTextArea} name='message' id="message" rows="3" placeholder="Mensaje"></textarea>
          </div>
          <div className={styles.formRow}>
            {formMessage ? <div className={styles.formMessage}>{formMessage}</div> : null}
            <div className={styles.formButton}>
              {!formSent && <button type="submit" className={styles.btnSubmit}>Enviar</button>}
            </div>
          </div>
        </form>
    </div>
  );
}

export default Contact;
