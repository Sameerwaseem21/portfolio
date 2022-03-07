import React from 'react'
import styles from '../portfolio/portfolio.module.scss'
type PortfolioProps = {

}

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <div>
      <img className={styles.imgB} src="https://i.ibb.co/mJwNdxm/Sameer-cv.png" alt="CV" />
    </div>
  )
}

export default Portfolio
