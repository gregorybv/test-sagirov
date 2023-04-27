// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react"
import Navbar from "../Navbar/Navbar"
import styles from "./Header.module.css"
import planet from "../../assets/planet.png"
import rocket from "../../assets/rocket.png"
import line from "../../assets/line.png"
import corner1 from "../../assets/corner.png"
import corner2 from "../../assets/corner2.png"
import fon from '../../assets/fone6.png'

const Header = () => {
  const canvasRef = useRef(null)
  const [rocketY, setRocketY] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const img = new Image()
    img.src = rocket

    const animate = () => {
      // Очищаем холст
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Обновляем положение ракеты
      const newRocketY = rocketY - 2 // Регулировка скорости и направления

      if (newRocketY <= -img.height / 2) {
        setRocketY(canvas.height / 4)
      } else {
        setRocketY(newRocketY)
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Рисуем ракету в новом положении
      ctx.drawImage(img, 0, rocketY, img.width, img.height)

      // Запрос следующего кадра анимации
      requestAnimationFrame(animate)
    }

    // Запуск цикла анимации
    requestAnimationFrame(animate)
  }, [rocketY])

  return (
    <header className={styles.header}>
      <img className={styles.fon} src={fon} alt="fon" />
      <Navbar />
      <div className='container'>
        <div className={styles.title}>
          <canvas
            ref={canvasRef}
            width={1500}
            height={1200}
            className={styles.rocket}
          />
          <img
            className={styles.planet}
            src={planet}
            alt='planet'
          />
          <div className={styles.left}>
            <h1 className={styles.left__text}>
              ПУТЕШЕСТВИ<span className={styles.left__span}>Е</span>
            </h1>
            <p className={styles.left__subtext}>на красную планету</p>
            <button type='button' className={styles.left__button}>
              <img className={styles.corner_one} src={corner1} alt='corner1' />
              Начать путешествие
              <img className={styles.corner_two} src={corner2} alt='corner2' />
            </button>
            <img className={styles.left__line} src={line} alt='line' />
          </div>
          <div className={styles.right}>
            <div className={styles.blocks}>
              <div className={styles.block}>
                <p className={styles.right__text}>мы</p>
                <p className={styles.right__number}>1</p>
                <p className={styles.right__text}>на рынке</p>
              </div>
              <div className={styles.block}>
                <p className={styles.right__text}>гарантируем</p>
                <p className={styles.right__number}>50%</p>
                <p className={styles.right__text}>безопасность</p>
              </div>
            </div>
            <div className={styles.blocks}>
              <div className={styles.block}>
                <p className={styles.right__text}>календарик за</p>
                <p className={styles.right__number}>2001<span className={styles.right__number_span}>г.</span></p>
                <p className={styles.right__text}>в подарок</p>
              </div>
              <div className={styles.block}>
                <p className={styles.right__text}>путешествие</p>
                <p className={styles.right__number}>597</p>
                <p className={styles.right__text}>дней</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
