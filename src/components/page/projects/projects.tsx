import React from 'react';
import styles from './projects.module.scss';

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    
       <div className={styles.container}>

            <div className={styles.headings}>
            <p className={styles.Introduction}>GitHub</p>
            </div>
         <div className={styles.gitImg}>
          <a href="https://github.com/Sameerwaseem21/portfolio"><img className={styles.gitImg1} src="https://gh-card.dev/repos/Sameerwaseem21/portfolio.svg?fullname="  alt="gitrepo"></img></a>
          </div>
          <div className={styles.gitImg}>
          <a href="https://github.com/varia-ict/varia-agile-20C-ryhma-3"><img className={styles.gitImg2} src="https://gh-card.dev/repos/varia-ict/varia-agile-20C-ryhma-3.svg?fullname="  alt="gitrepo"></img></a>
          </div>

           <div className={styles.headings}>
          <p className={styles.education}>GameProject</p>
          </div>

  
          <div className={styles.gitimageDIV}>
        <a href="https://play.unity.com/u/sameerwaseem21"><img  className={styles.gitimage} src="https://i.ibb.co/DGQhgdM/Official-unity-logo.png" alt="git"></img></a>
        </div>
           
           
        <div className={styles.headings}>
            <p className={styles.Introduction}>CERTIFICATIONS</p>
            </div>
           
        <div className={styles.certimageDIV}>
            <a href="https://www.credly.com/badges/94ea5af1-8edb-4f7f-ac8d-380212ceb9b9/public_url"><img  className={styles.certimage} src="https://i.ibb.co/D9ZPTPv/introduction-to-packet-tracer.png" alt="packet tracer certification"></img></a>
        </div>

        <div className={styles.certimageDIV}>
            <a href="https://www.credly.com/badges/d761210e-9068-4b4d-a340-222c8d632fb9/public_url"><img  className={styles.certimage} src="https://i.ibb.co/gdc0Jvr/introduction-to-cybersecurity.png" alt="cybersecurity certification"></img></a>
        </div>

    </div>

    
  )
}

export default Projects
