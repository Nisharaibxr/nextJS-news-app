import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}><h3>Home</h3></div>
      <div onClick={() => router.push('/feed/1')}><h3>Latest-News</h3></div>
      {/* <div onClick={() => router.push('/eom')}><h3>EOM</h3></div> */}
      <div onClick={() => (window.location.href = 'https://www.linkedin.com/in/nisharaibxr/')}><h3>LinkedIn</h3></div>
    </div>
  );
};
