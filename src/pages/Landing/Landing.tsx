// css
import styles from './Landing.module.css'
import caps from '../../assets/images/caps.png'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <div className={styles.center}>
      <h1>MEM-Stack</h1>
      
            <div className={styles.page}>
                <h2>General Assembly</h2>
                <p>Software Engineering Immersive 3/20/2023</p>
                <img src={caps}/>
            </div>
        </div>
    </main>
  )
}

export default Landing
