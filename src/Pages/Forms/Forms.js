import React from 'react';
import Helmet from 'react-helmet';
import styles from './Forms.module.css';
import { useForm } from 'react-hook-form';

function Corrections() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className={styles.corrections} onSubmit={handleSubmit(onSubmit)}>
      <header>
        <h1 className={styles.corrections_heading}>Corrections</h1>
        <p className={styles.corrections_p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </header>

      <input placeholder="Name" {...register('name')} />
      <input
        placeholder="Affiliation/Occupation"
        {...register('affiliation')}
      />
      <input placeholder="Email" {...register('email')} type="email" />
      <input
        placeholder="Name of Page Needing Correction (please also include corresponding URL)"
        {...register('page')}
      />
      <input
        placeholder="Name of specific feature to be corrected (i.e. biography, demographic fact, interpretive essay)"
        {...register('feature')}
      />
      <textarea
        placeholder="Corrections"
        {...register('corrections')}
      ></textarea>
      <input placeholder="Source for Correction" {...register('source')} />
      <input type="submit" className={styles.corrections_submit} />
    </form>
  );
}

function Ideas() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className={styles.corrections} onSubmit={handleSubmit(onSubmit)}>
      <header>
        <h1 className={styles.corrections_heading}>
          Have more ideas? Tell us here!
        </h1>
        <p className={styles.corrections_p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </header>

      <input placeholder="Name" {...register('name')} />
      <input
        placeholder="Affiliation/Occupation"
        {...register('affiliation')}
      />
      <input placeholder="Address" {...register('address')} />
      <input placeholder="Telephone" {...register('telephone')} type="tel" />
      <input placeholder="Email" {...register('email')} type="email" />
      <textarea placeholder="Comments" {...register('comments')}></textarea>
      <input type="submit" className={styles.corrections_submit} />
    </form>
  );
}

function Donate() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className={styles.corrections} onSubmit={handleSubmit(onSubmit)}>
      <header>
        <h1 className={styles.corrections_heading}>
          How To Donate Your Papers
        </h1>
        <p className={styles.corrections_p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </header>

      <input placeholder="Name" {...register('name')} />
      <input placeholder="Role At NWC" {...register('role')} />
      <input placeholder="Address" {...register('address')} />
      <input placeholder="Telephone" {...register('telephone')} type="tel" />
      <input placeholder="Email" {...register('email')} type="email" />
      <textarea placeholder="Comments" {...register('comments')}></textarea>
      <input type="submit" className={styles.corrections_submit} />
    </form>
  );
}

function ThankYou() {
  return (
    <form className={styles.corrections}>
      <header>
        <h1 className={styles.corrections_heading}>Thank you</h1>
        <p className={styles.corrections_p}>
          Your submission has been submitted for review
        </p>
      </header>

      <input
        type="button"
        className={styles.corrections_submit}
        value="Back to submission page"
      />
    </form>
  );
}

function Biographies() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className={styles.corrections} onSubmit={handleSubmit(onSubmit)}>
      <header>
        <h1 className={styles.corrections_heading}>
          Submitting Completed Biographies and Oral Histories
        </h1>
        <p className={styles.corrections_p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </header>

      <input placeholder="Name" {...register('name')} />
      <input
        placeholder="Affiliation/Occupation"
        {...register('affiliation')}
      />
      <input placeholder="Address" {...register('address')} />
      <input placeholder="Telephone" {...register('telephone')} type="tel" />
      <input placeholder="Email" {...register('email')} type="email" />
      <input placeholder="NWC Participant" {...register('participant')} />
      <input
        placeholder="Date of Submission"
        {...register('date')}
        type="date"
      />
      <input
        placeholder="Upload Document"
        {...register('document')}
        type="file"
      />
      <input type="submit" className={styles.corrections_submit} />
    </form>
  );
}

function Archives() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className={styles.corrections} onSubmit={handleSubmit(onSubmit)}>
      <header>
        <h1 className={styles.corrections_heading}>
          Submitting Information About Archives
        </h1>
        <p className={styles.corrections_p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </header>

      <input placeholder="Name" {...register('name')} />
      <input
        placeholder="Affiliation/Occupation"
        {...register('affiliation')}
      />
      <input placeholder="Address" {...register('address')} />
      <input placeholder="Telephone" {...register('telephone')} type="tel" />
      <input placeholder="Email" {...register('email')} type="email" />
      <input placeholder="NWC Participant" {...register('participant')} />
      <input
        placeholder="Date of Submission"
        {...register('date')}
        type="date"
      />
      <textarea placeholder="Comments" {...register('comments')}></textarea>
      <input placeholder="Relevant URLs" {...register('urls')} />
      <input
        placeholder="Upload Document"
        {...register('document')}
        type="file"
      />
      <input type="submit" className={styles.corrections_submit} />
    </form>
  );
}

function Forms() {
  return (
    <main className={styles.forms}>
      <Corrections />
      <Ideas />
      <Donate />
      <ThankYou />
      <Biographies />
      <Archives />
    </main>
  );
}

export default Forms;
