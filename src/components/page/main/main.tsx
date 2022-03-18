import React from 'react'
import styles from './main.module.scss'
import pic1 from '../../../media/email.svg';
import pic2 from '../../../media/instagram.svg';
import pic3 from '../../../media/Linkedin-Logo.png';



type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      
      <p>
        <span>
          Sameer Waseem
        </span>
      </p>

      <div className={styles.txtDiv}>
        <h1 className={styles.cvintro}><br></br><br></br>Hi welcome to my Portfolio.For contacting me you can see down below.</h1>
      </div>
      <div className={styles.container}>
      <a href='mailto:sairwaseem2015@hotmail.com'><img src={pic1} alt='asd' /></a>
      <a href='https://www.instagram.com/sameerwaseem21/?hl=en'><img src={pic2} alt='asd' /></a>
      <a href='https://www.linkedin.com/in/sameer-waseem-28b768230/'><img src={pic3} alt='asd' /></a>
    </div>



    </div>
  )
}

export default Main
