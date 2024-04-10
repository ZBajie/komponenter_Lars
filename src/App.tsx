import { useState } from "react"
import DatePicker from "./components/DatePicker/DatePicker"

import { DragAndDrop } from "./components/DragDrop/DragAndDrop"
import SearchBtn from "./components/SearchBtn/SearchBtn"
import MeatballMenu from "./components/meatballMenu/MeatballMenu"
import BentoMenu from "./components/BentoMenu/BentoMenu"
import Spinner from "./components/Spinner/Spinner"
import Calender from "./components/Calender/Calender"
import RadioButton from "./components/RadioButton/RadioButton"
import CheckBox from "./components/CheckBox/CheckBox"

function App() {
  const [date, setDate] = useState("")
  const setDateChosed = (date: string) => {
    setDate(date)
  }

  return (
    <>
      <h1>Komponenter</h1>
      <BentoMenu />
      <MeatballMenu />
      <CheckBox />
      <RadioButton />
      <Calender setDateChosed={setDateChosed} />
      <Spinner />
      <DatePicker
        labelText={"Pick your date!"}
        buttonText="Select Date!"
        minDate="2024-04-10"
        maxDate="2025-05-14"
        setDateChosed={setDateChosed}
        datePickerStyleRow={false}
      />
      <p>{date}</p>
      <DragAndDrop />
      <SearchBtn placeholder="test" />
    </>
  )
}

export default App
