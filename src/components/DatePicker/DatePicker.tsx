import { useState } from "react"

export type DatePickerTypes = {
  header: string
  buttonText: string
  minDate: string
  maxDate: string
  setDateChosed: (date: string) => void
  datePickerStyleRow: boolean
}

const DatePicker: React.FC<DatePickerTypes> = ({
  header,
  buttonText,
  minDate,
  maxDate,
  setDateChosed,
  datePickerStyleRow,
}) => {
  const [date, setDate] = useState("")

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
        min={minDate}
        max={maxDate}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={dateChosed}>{buttonText}</button>
    </div>
  )
}

export default DatePicker
