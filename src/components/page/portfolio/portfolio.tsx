import React from 'react'
import styles from '../portfolio/portfolio.module.scss'
type PortfolioProps = {

}

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
   
     <div className={styles.container}>
          <div className={styles.headings}>
          <p className={styles.Introduction}>Introduction</p>
          </div>

          <div className={styles.txtDiv}>
          <h1 className={styles.cvintro}><br></br><br></br>My name is Sameer Waseem.
           I am 19 years old. I am a punctual, systematic and hard worker.
           I am doing Bachelor of Degree in Information and Communication Technology, Varia.
           I am interested in starting my own business
           , like my own software house because I am interested in programming and development.</h1>
           </div>

           <div className={styles.headings}>
          <p className={styles.education}>Education</p>
          </div>

          
          <div className={styles.txtDiv1}>
          <h1 className={styles.cvintro}><br></br><br></br>Bachelor of Degree in Information and Communication Technology, Varia</h1>
          <h1>2020 - 2023</h1>
          <h1>Suomen Diakoniaopisto</h1>
          <h1>2019 - 2020</h1>
          <h1>Länsimäen Koulu</h1>
          <h1>2017-2019</h1>
           </div>

           <div className={styles.headings}>
          <p className={styles.skills}>Skills</p>
          </div>

          <div className={styles.txtDiv2}>
          <h1><br></br><br></br>C#</h1>
          <h1>HTML</h1>
          <h1>CSS</h1>
          <h1>SQL</h1>
          <h1>UNITY</h1>
          <h1>EDITING VIDEO</h1>
          
           </div>


           <div className={styles.headings}>
          <p className={styles.workexp}>Work Experience</p>
          </div>
          
          <div className={styles.txtDiv3}>
          <h1><br></br><br></br>2021-2022           </h1>
          <h1>Ravintola Tandoori Villa Sörnäistenlaituri 3, 00540 Helsinki</h1>
          <h1>Costumer Service</h1>
          <h1>Part time Job</h1>
          <h1>21.10-20.11.2019 </h1>
          <h1>McDonald's</h1>
          <h1>Internship</h1>
          <h1>2018 2 Weeks </h1>
          <h1> Ravintola Tandoori Villa Niittyläntie 2, 00620 Helsinki</h1>
          <h1>Restaurant assistant</h1>
          <h1>Internship</h1>
          

           </div>

           
           <div className={styles.headings}>
          <p className={styles.languages}>Languages</p>
          </div>
          
          <div className={styles.txtDiv4}>
          <h1 ><br></br><br></br>ENGLISH</h1>
          <h1>FINNISH(SUOMEN KIELI)</h1>
          <h1>URDU</h1>
           </div>

      </div>
  )
  
}



export default Portfolio
