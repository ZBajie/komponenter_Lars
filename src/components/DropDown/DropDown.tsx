import { useState } from "react"

const DropDown = () => {
  const [boxHeigth, setBoxHeigth] = useState(0)
  const [dropdown, setDropdown] = useState("")
  const [show, setShow] = useState(false)
  return (
    <section className="dropdown">
      <div
        onClick={() => {
          if (show) {
            setDropdown("dropdown")
            setBoxHeigth(1)
            setTimeout(() => {
              setBoxHeigth(200)
            }, 100)
          } else {
            setBoxHeigth(0)
            setTimeout(() => {
              setDropdown("")
            }, 2000)
          }
          setShow(!show)
        }}
      >
        Dropdown
      </div>

      <div className={dropdown} style={{ height: `${boxHeigth}px` }}></div>
    </section>
  )
}

export default DropDown
