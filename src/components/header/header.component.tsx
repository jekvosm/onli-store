import Logo from '../../assets/logo.svg'
import BasketIcon from '../../assets/basket_icon.svg'

import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src={Logo} alt='logo' width={120} height={120} />
      </div>
      <input
        type='search'
        className={styles.header__searchbox}
        placeholder='Я ищу ...'
      />
      <div className={styles.header__basket}>
        <img src={BasketIcon} alt='shopping cart' width={38} height={38} />
        <span>Корзина</span>
      </div>
    </header>
  )
}
export default Header
