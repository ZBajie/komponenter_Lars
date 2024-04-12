# Components

## DatePicker component

React and Scss component. This component let you select a date that will be sended back to the parent component.

The parent need a function that handle the prop.

There are several props that will be sent to the component.

minDate, maxDate, labelText and buttonText.

For styling there is one prop that will be sent to the component, its for choosing if the component should be displayed as column or row.

The styling is made in a scss file and uses variables.

## Calender

Made a calender component from scratch. With new Date().

It seems to work for showing the dates and pick 1 date.

Still working on style.

## Spinner

The spinner component is a copy from https://blog.hubspot.com/website/css-animation-examples

## React + TypeScript + Vite

npm install
npm run dev


**************************************************************************************************************

# Information if you want to use all the icons intended for this Navbar
* You need to install a patch which is

- * npm install react-icons

## then import from the following link
* import { FaBars, FaTimes } from "react-icons/fa";



- if you want to check more icons, go to =>
https://react-icons-v2.vercel.app/

**************************************************************************************************************


# If you want to use the share button code. 

* And you want to change the link where it should go, and if you want to change icons,
need to make changes in three places, 

* 1 App.tsx => here you change link to icon

* 2 buttens.scss => from line 118 downwards, you change the name of the link as well as the color name,
 
* 3 _colors.scss => here you change the color code for the icon and what it should be called.

* I recommend that you check this link => 
https://remixicon.com/

**************************************************************************************************************