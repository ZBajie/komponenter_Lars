import { useEffect, useState } from "react"

type DropDownTypes = {
  dropdownUnder: boolean
  dropdownTop: boolean
  dropdownLeft: boolean
}

const DropDown: React.FC<DropDownTypes> = ({
  dropdownUnder,
  dropdownTop,
  dropdownLeft,
}) => {
  const [boxHeigth, setBoxHeigth] = useState(0)
  const [show, setShow] = useState(false)
  const [dropdownUnderCss, setDropdownUnder] = useState("")
  const [dropdownTopCss, setDropdownTopCss] = useState("")
  const [dropdownLeftCss, setDropdownLeftCss] = useState("")

  useEffect(() => {
    if (!dropdownUnder) {
      setDropdownUnder("dropdown-under")
    }
    if (dropdownTop && dropdownLeft) {
      setDropdownTopCss("dropdown-top-left")
    }
    if (dropdownTop && !dropdownLeft) {
      setDropdownLeftCss("dropdown-top-right")
    }
    if (!dropdownTop && dropdownLeft) {
      setDropdownLeftCss("dropdown-bottom-left")
    }
    if (!dropdownTop && !dropdownLeft) {
      setDropdownLeftCss("dropdown-bottom-right")
    }
  }, [dropdownUnder, dropdownTop, dropdownLeft])

  return (
    <section className={`dropdown ${dropdownLeftCss} ${dropdownTopCss}`}>
      <div
        onClick={() => {
          if (show) {
            setBoxHeigth(200)
          } else {
            setBoxHeigth(0)
          }
          setShow(!show)
        }}
      >
        Dropdown
      </div>

      <div
        className={dropdownUnderCss}
        style={{ height: `${boxHeigth}px` }}
      ></div>
    </section>
  )
}

export default DropDown
