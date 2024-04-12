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
import List from "./components/List/List"
import Progressbar from "./components/Progressbar/Progressbar"
import Navbar from "./components/Navbar/NavBar"
import ShareButton from "./components/ShareButton/ShareButton"
import DropDown from "./components/DropDown/DropDown"

//-------------------------------------------NavBar-----------------------------------------------//
const GoToNavLink = [
  { Text: "Home", href: "/#" },
  { Text: "About oss", href: "/#" },
  { Text: "Contakt oss", href: "/#" },
  { Text: "Different services", href: "/#" },
  { Text: "Cooperate with oss", href: "/#" },
]

//------------------------------------------------------------------------------------------//

//-------------------------------------Social Media Butten's---------------------------------------//

const socialLinks = [
  { className: "twitter", icon: "ri-twitter-line", href: "#" },
  { className: "facebook", icon: "ri-facebook-line", href: "#" },
  { className: "close", icon: "ri-close-line", href: "#" }, // För att stänga knap menyn
  { className: "discord", icon: "ri-discord-line", href: "#" },
  { className: "whatsapp", icon: "ri-whatsapp-line", href: "#" },
]

//------------------------------------------------------------------------------------------//

function App() {
  const [date, setDate] = useState("")
  const setDateChosed = (date: string) => {
    setDate(date)
  }

  return (
    <>
      <Navbar GoToNavLink={GoToNavLink} />
      <h1>Komponenter</h1>
      <BentoMenu />
      <MeatballMenu />
      <DropDown />
      <Progressbar />
      <List />
      <CheckBox onClick={() => {}} />
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
      <ShareButton socialLinks={socialLinks} />
    </>
  )
}

export default App
