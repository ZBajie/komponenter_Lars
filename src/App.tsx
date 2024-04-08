import { useState } from "react"
import DatePicker from "./components/DatePicker/DatePicker"

function App() {
  const [date, setDate] = useState("")
  const setDateChosed = (date: string) => {
    setDate(date)
  }

  return (
    <>
      <h1>Komponenter</h1>
      <DatePicker
        labelText={"Pick your date!"}
        buttonText="Select Date!"
        minDate="2024-04-10"
        maxDate="2025-05-14"
        setDateChosed={setDateChosed}
        datePickerStyleRow={false}
      />
      <p>{date}</p>
    </>
  )
}

export default App
