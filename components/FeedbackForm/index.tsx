import React from 'react'
import styles from "./index.module.css"
const FeedbackForm = () => {
  return (
    <div className={styles.feedbackFormCard}>
      <div className={styles.formTitle}>Please Give your Feedback/Suggestions</div>
      <form className={styles.feedBackForm}>
        <div className={styles.field}>
          <label className={styles.label}>Name</label>
          <input type='text' placeholder='Enter your name here...' className={styles.inputField}></input>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Email</label>
          <input type="email" placeholder='Enter your email here...' className={styles.inputField}></input>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Phone No.</label>
          <input type='tel' placeholder='Enter your phone number here...' className={styles.inputField}></input>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Feedback / Suggestion</label>
          <textarea  placeholder='Enter your Feedback/Suggestions here...' className={[styles.inputField, styles.suggestion].join(' ')}/>
        </div>
        <input type='submit' value="Submit" className={styles.submitButton}></input>
      </form>
    </div>
  )
}
export default FeedbackForm;
