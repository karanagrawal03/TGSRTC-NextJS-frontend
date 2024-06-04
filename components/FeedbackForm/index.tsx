import React from 'react'
import styles from "./index.module.css"
import { EMAIL, EMAIL_PLACEHOLDER, FEEDBACK_PLACEHOLDER, FEEDBACK_TITLE, NAME, NAME_PLACEHOLDER, PHONE_NO, PHONE_NUMBER_PLACEHOLDER, SUBMIT_TYPE, SUGGESTIONS, TELEPHONE_TYPE, TEXT_TYPE } from '../../constants';
const FeedbackForm = () => {
  return (
    <div className={styles.feedbackFormCard}>
      <div className={styles.formTitle}>{FEEDBACK_TITLE}</div>
      <form className={styles.feedBackForm}>
        <div className={styles.field}>
          <label className={styles.label}>{NAME}</label>
          <input type={TEXT_TYPE} placeholder={NAME_PLACEHOLDER} className={styles.inputField}></input>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{EMAIL}</label>
          <input type={EMAIL} placeholder={EMAIL_PLACEHOLDER} className={styles.inputField}></input>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{PHONE_NO}</label>
          <input type={TELEPHONE_TYPE} placeholder={PHONE_NUMBER_PLACEHOLDER} className={styles.inputField}></input>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{SUGGESTIONS}</label>
          <textarea placeholder={FEEDBACK_PLACEHOLDER} className={styles.suggestion} />
        </div>
        <input type={SUBMIT_TYPE} value="Submit" className={styles.submitButton}></input>
      </form>
    </div>
  )
}
export default FeedbackForm;
