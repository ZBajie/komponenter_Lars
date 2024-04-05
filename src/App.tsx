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
        header={"Pick your date!"}
        buttonText="Select Date!"
        setDateChosed={setDateChosed}
        datePickerStyleRow={true}
      />
      <p>{date}</p>
    </>
  )
}

export default App
