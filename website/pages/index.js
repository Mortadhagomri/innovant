import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

      </main>

      <footer className={styles.footer}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Vercel Logo" width={100} height={100} />
          <p>© All Rights Reserved.</p>
        </div>
      </footer>
    </div >
  )
}
