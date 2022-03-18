import React from 'react'
import styles from './main.module.scss'

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


           <div className={styles.gitImg}>
          <a href="https://www.instagram.com/sameerwaseem21/?hl=en"><img className={styles.gitImg2} src="https://www.svgrepo.com/show/111199/instagram.svg"  alt="gitrepo"></img></a>
          </div>

          <div className={styles.gitImgin}>
          <a href="https://www.linkedin.com/in/sameer-waseem-28b768230/"><img className={styles.gitImgin} src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"alt="gitrepo"></img></a>
          </div>

          <div className={styles.gitImgemail}>
          <a href="mailto:sairwaseem2015@hotmail.com"><img className={styles.gitImgemail} src="https://www.svgrepo.com/show/13898/email.svg"alt="gitrepo"></img></a>
          </div>




    </div>
  )
}

export default Main
