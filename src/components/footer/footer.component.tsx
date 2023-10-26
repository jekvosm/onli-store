import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__copyright}>
        2023 © Onli Store — модный интернет-магазин одежды, обуви и аксессуаров.
        Все права защищены. Доставка по всей России.
      </span>
    </footer>
  )
}
export default Footer
