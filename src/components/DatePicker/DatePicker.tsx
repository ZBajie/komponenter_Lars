import { useState } from "react"

export type DatePickerTypes = {
  header: string
  buttonText: string
  setDateChosed: (date: string) => void
  datePickerStyleRow: boolean
}

const DatePicker: React.FC<DatePickerTypes> = ({
  header,
  buttonText,
  setDateChosed,
  datePickerStyleRow,
}) => {
  const todayDate = new Date()
  const today = `${todayDate.getFullYear()}-${
    todayDate.getMonth() + 1
  }-${todayDate.getDate()}`

  const [date, setDate] = useState(today)

  const dateChosed = () => {
    setDateChosed(date)
  }
  return (
    <div
      className={`DatePicker ${datePickerStyleRow ? "datePickerStyleRow" : ""}`}
    >
      <label htmlFor="DatePicker">{header}</label>
      <input
        type="date"
        name="datePicker"
        id="DatePicker"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={dateChosed}>{buttonText}</button>
    </div>
  )
}

export default DatePicker
