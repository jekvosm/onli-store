import { Outlet } from 'react-router-dom'

import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'

import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
