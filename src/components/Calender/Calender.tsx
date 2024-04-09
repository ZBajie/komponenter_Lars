import { useState } from "react"

const Calender = () => {
  const [dateChosed, setDateChosed] = useState<Date>()
  const date = new Date()
  const [year, setYear] = useState(date.getFullYear())
  const [month, setMonth] = useState(date.getMonth())
  const day = date.getDate()

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  let firstDay = new Date(year, month, 1).getDay()

  const calenderDays = []
  if (firstDay === 0) {
    firstDay = 7
  }
  for (let i = 1; i < firstDay; i++) {
    calenderDays.push(<div key={i}></div>)
  }
  for (let i = 0; i < daysInMonth; i++) {
    calenderDays.push(
      <div
        key={i + firstDay}
        onClick={() => {
          setDateChosed(new Date(year, month, i + 1))
        }}
      >
        {i + 1}
      </div>
    )
  }
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  return (
    <>
      <p>{date.toLocaleTimeString()}</p>
      <p>{date.toLocaleDateString()}</p>
      <p>{year}</p>
      <p>{month}</p>
      <p>{day}</p>
      <p>days in month: {daysInMonth}</p>
      <p>first day in month: {firstDay}</p>
      <section className="calender">
        <header>
          <button
            onClick={() => {
              if (month > 0) {
                setMonth(month - 1)
              } else {
                setMonth(11)
                setYear(year - 1)
              }
            }}
          >
            Prev
          </button>
          <h2>
            {monthNames[month]} {year}
          </h2>
          <button
            onClick={() => {
              if (month < 11) {
                setMonth(month + 1)
              } else {
                setMonth(0)
                setYear(year + 1)
              }
            }}
          >
            Next
          </button>
        </header>
        <div className="calender-days">
          <div>Mon</div>
          <div>Tue</div>
          <div>Wen</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
          {calenderDays}
        </div>
      </section>
      <h1>{dateChosed?.toDateString()}</h1>
    </>
  )
}

export default Calender
