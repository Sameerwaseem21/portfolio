import React from 'react';
import styles from './example.module.scss';
import pic1 from '../../media/email.svg';
import pic2 from '../../media/instagram.svg';
import pic3 from '../../media/Linkedin-Logo.png';


type ExampleProps = {

}

const Example: React.FC<ExampleProps> = () => {
  return (
    <div className={styles.container}>
      <a href='.'><img src={pic1} alt='asd' /></a>
      <a href='.'><img src={pic2} alt='asd' /></a>
      <a href='.'><img src={pic3} alt='asd' /></a>
    </div>
  )
}

export default Example
