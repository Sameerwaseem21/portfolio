import React from 'react'
import style from './main.module.scss'

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={style.container}>
      
      <p>
        <span>
          Sameer Waseem
        </span>
      </p>


    </div>
  )
}

export default Main
