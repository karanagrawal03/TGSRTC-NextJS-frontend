import React, { useState } from 'react';
import styles from "./index.module.css";
import { EMAIL, EMAIL_PLACEHOLDER, FEEDBACK_PLACEHOLDER, FEEDBACK_TITLE, NAME, NAME_PLACEHOLDER, PHONE_NO, PHONE_NUMBER_PLACEHOLDER, SUBMIT_TYPE, SUGGESTIONS, TELEPHONE_TYPE, TEXT_TYPE } from '../../constants';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suggestions: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    suggestions: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let error = '';

    if (name === 'name' && !value) {
      error = 'Name is required';
    }

    if (name === 'email') {
      if (!value) {
        error = 'Email is required';
      } else if (!/^\S+@\S+$/i.test(value)) {
        error = 'Invalid email address';
      }
    }

    if (name === 'phone') {
      if (!value) {
        error = 'Phone number is required';
      } else if (!/^\d+$/.test(value)) {
        error = 'Invalid phone number';
      }
    }

    if (name === 'suggestions' && !value) {
      error = 'Suggestions are required';
    }

    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        suggestions: ''
      });

      setErrors({
        name: '',
        email: '',
        phone: '',
        suggestions: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', phone: '', suggestions: '' };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.com$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }
    else if (!formData.email.endsWith('.com')) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }
    else if (formData.phone.length !== 10) {
      isValid = false
      newErrors.phone = 'Phone number must have 10 digits';
    }

    if (!formData.suggestions) {
      newErrors.suggestions = 'Suggestions are required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className={styles.feedbackFormCard}>
      <div className={styles.formTitle}>{FEEDBACK_TITLE}</div>
      <form className={styles.feedBackForm} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label}>{NAME}</label>
          <input
            type={TEXT_TYPE}
            name="name"
            placeholder={NAME_PLACEHOLDER}
            className={styles.inputField}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{EMAIL}</label>
          <input
            type={EMAIL}
            name="email"
            placeholder={EMAIL_PLACEHOLDER}
            className={styles.inputField}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{PHONE_NO}</label>
          <input
            type={TELEPHONE_TYPE}
            name="phone"
            placeholder={PHONE_NUMBER_PLACEHOLDER}
            className={styles.inputField}
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>}
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{SUGGESTIONS}</label>
          <textarea
            name="suggestions"
            placeholder={FEEDBACK_PLACEHOLDER}
            className={styles.suggestion}
            value={formData.suggestions}
            onChange={handleChange}
          />
          {errors.suggestions && <p className={styles.errorMessage}>{errors.suggestions}</p>}
        </div>
        <input type={SUBMIT_TYPE} value="Submit" className={styles.submitButton} />
      </form>
    </div>
  );
};

export default FeedbackForm;
