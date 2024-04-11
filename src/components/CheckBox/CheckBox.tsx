import { useState } from "react"

type CheckBoxType = {
  onClick: () => void
}

const CheckBox: React.FC<CheckBoxType> = ({ onClick }) => {
  const [checkBoxClicked, setCheckBoxClick] = useState(false)
  return (
    <section className="checkbox">
      <h2>Checkbox</h2>
      <div
        className={`${checkBoxClicked && "checkbox-clicked"}`}
        onClick={() => {
          setCheckBoxClick(!checkBoxClicked)
          onClick()
        }}
      ></div>
    </section>
  )
}

export default CheckBox
