import styles from"./contact_header.module.css"
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export function Contact(){


    return (
      <section className={styles.section}>
        <div className={styles.div}>
          <div>
            <FaFacebook style={{ color: "blue" }} className={styles.icon} />
          </div>
          <div>
            <IoLogoWhatsapp style={{ color: "green" }} className={styles.icon} />
          </div>
          <div className={styles.icon}>
            <MdEmail className={styles.icon} />
            <p className={styles.p}>ans-btp@gmail.com</p>
          </div>
          <div className={styles.icon}>
            <FaPhoneAlt className={styles.icon} />
            <p className={styles.p}>01-73-03-89-35</p>
          </div>
        </div>
      </section>
    );
}