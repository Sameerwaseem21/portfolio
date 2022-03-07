import React from 'react'
import style from './main.module.scss'

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={style.container}>
      
      <p>
  Spice up your type with CSS
  <span>
    Sameer Waseem
  </span>
  &mdash; nigga i am Musha &mdash;
</p>
    </div>
  )
}

export default Main
