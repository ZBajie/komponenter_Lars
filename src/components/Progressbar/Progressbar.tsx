import { useState } from "react"
import CheckBox from "../CheckBox/CheckBox"

const Progressbar = () => {
  const [barNumber, setBarNumber] = useState(0)
  const [checkBox1, setCheckBox1] = useState(false)
  const [checkBox2, setCheckBox2] = useState(false)
  const [checkBox3, setCheckBox3] = useState(false)
  const [checkBox4, setCheckBox4] = useState(false)

  const onClick = (button: string) => {
    console.log("one button clicked", button)
    if (button === "1") {
      if (checkBox1 === false) {
        setBarNumber(barNumber + 25)
      } else {
        setBarNumber(barNumber - 25)
      }
      setCheckBox1(!checkBox1)
    }
    if (button === "2") {
      if (checkBox2 === false) {
        setBarNumber(barNumber + 25)
      } else {
        setBarNumber(barNumber - 25)
      }
      setCheckBox2(!checkBox2)
    }
    if (button === "3") {
      if (checkBox3 === false) {
        setBarNumber(barNumber + 25)
      } else {
        setBarNumber(barNumber - 25)
      }
      setCheckBox3(!checkBox3)
    }
    if (button === "4") {
      if (checkBox4 === false) {
        setBarNumber(barNumber + 25)
      } else {
        setBarNumber(barNumber - 25)
      }
      setCheckBox4(!checkBox4)
    }
  }
  return (
    <section className="progressbar">
      <h2>Progressbar</h2>
      <div>
        <div className="bar" style={{ width: `${barNumber}%` }}></div>
        <CheckBox onClick={() => onClick("1")} />
        <CheckBox onClick={() => onClick("2")} />
        <CheckBox onClick={() => onClick("3")} />
        <CheckBox onClick={() => onClick("4")} />
      </div>
    </section>
  )
}

export default Progressbar
