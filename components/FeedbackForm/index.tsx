import React from 'react'
import styles from "./index.module.css"
import { EMAIL_PLACEHOLDER, FEEDBACK_PLACEHOLDER, NAME_PLACEHOLDER, PHONE_NUMBER_PLACEHOLDER } from '../../constants';
const FeedbackForm = () => {
  return (
    <div className={styles.feedbackFormCard}>
      <div className={styles.formTitle}>Please Give your Feedback/Suggestions</div>
      <form className={styles.feedBackForm}>
        <div className={styles.field}>
          <label className={styles.label}>Name</label>
          <input type='text' placeholder={NAME_PLACEHOLDER} className={styles.inputField}></input>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Email</label>
          <input type="email" placeholder={EMAIL_PLACEHOLDER} className={styles.inputField}></input>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Phone No.</label>
          <input type='tel' placeholder={PHONE_NUMBER_PLACEHOLDER} className={styles.inputField}></input>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Feedback / Suggestion</label>
          <textarea placeholder={FEEDBACK_PLACEHOLDER} className={styles.suggestion} />
        </div>
        <input type='submit' value="Submit" className={styles.submitButton}></input>
      </form>
    </div>
  )
}
export default FeedbackForm;
