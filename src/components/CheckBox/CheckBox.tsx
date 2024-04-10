import { useState } from "react"

const CheckBox = () => {
  const [checkBoxClicked, setCheckBoxClick] = useState(false)
  return (
    <section className="checkbox">
      <h2>Checkbox</h2>
      <div
        className={`${checkBoxClicked && "checkbox-clicked"}`}
        onClick={() => {
          setCheckBoxClick(!checkBoxClicked)
        }}
      ></div>
    </section>
  )
}

export default CheckBox
