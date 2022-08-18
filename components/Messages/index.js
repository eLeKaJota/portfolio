import styles from '../../styles/Messages.module.scss'
import {getAllContacts, getContactByQuery} from "../../services/contact.service";
import {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import Message from "../Message";
import Head from "next/head";

const Messages = () => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    loadMessages(1, 10);
  },[]);

  const loadMessages = async (page, limit) => {
    const messages = await getContactByQuery({
    page: page,
    limit: limit
    });
    if (messages.status === 200) {
      setMessages(messages.data)
      setLoading(false)
    }
  }


  if (loading) {
    return <div>Loading...</div>
  }

  console.log('messages', messages);

  return (
    <div className={styles.content}>
      <Head>
        <title>Carlos Cifuentes - Admin - Mensajes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ReactPaginate pageCount={messages.totalPages}
                     breakLabel="..."
                     nextLabel=" >"
                     pageRangeDisplayed={5}
                     previousLabel="< "
                     renderOnZeroPageCount={null}
                     onPageChange={async (e) => {
                       await loadMessages(e.selected + 1, 10)
                       window.scrollTo({ top: 0, behavior: 'smooth' });
                     }}
                     containerClassName={styles.pagination}
                     pageClassName={styles.page}
                     pageLinkClassName={styles.pageLink}
                     activeClassName={styles.active}
                     previousClassName={styles.previous}
                     nextClassName={styles.next}
                     previousLinkClassName={styles.previousLink}
                     nextLinkClassName={styles.nextLink}
                     disabledClassName={styles.disabled}
                     disabledLinkClassName={styles.disabledLink}
      ></ReactPaginate>
      {messages.data.map(message => (
        <Message
          key={message._id}
          name={message.name}
          email={message.email}
          message={message.message}
          date={message.timestamp.createdAt}
        />
      ))}
      <ReactPaginate pageCount={messages.totalPages}
                     breakLabel="..."
                     nextLabel=" >"
                     pageRangeDisplayed={5}
                     previousLabel="< "
                     renderOnZeroPageCount={null}
                      onPageChange={async (e) => {
                        await loadMessages(e.selected + 1, 10)
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      containerClassName={styles.pagination}
                      pageClassName={styles.page}
                      pageLinkClassName={styles.pageLink}
                      activeClassName={styles.active}
                      previousClassName={styles.previous}
                      nextClassName={styles.next}
                      previousLinkClassName={styles.previousLink}
                      nextLinkClassName={styles.nextLink}
                      disabledClassName={styles.disabled}
                      disabledLinkClassName={styles.disabledLink}
      ></ReactPaginate>
    </div>
  )
}

export default Messages;
