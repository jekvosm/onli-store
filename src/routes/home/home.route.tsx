import Directory from '../../components/directory/directory.component'
import RandomItems from '../../components/random-items/random-items.component'
import styles from './home.module.css'

const Home = () => {
  return (
    <main className={styles.home}>
      <Directory />
      <RandomItems />
    </main>
  )
}
export default Home
