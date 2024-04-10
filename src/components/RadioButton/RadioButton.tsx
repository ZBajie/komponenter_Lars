/*
Gör en radio button med en animerad hover-effekt. 
Lägg till en till animation när man klickar på den och ytterligare ett utseende när den är iklickad. 
Med så mkt CSS som möjligt.
*/

const RadioButton = () => {
  return (
    <section className="radio-button">
      <h2>RadioButton</h2>
      <input type="radio" name="yes" id="yes" />
      <label htmlFor="yes">Ja</label>
      <input type="radio" name="yes" id="no" />
      <label htmlFor="no">Nej</label>
    </section>
  )
}

export default RadioButton
