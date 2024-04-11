import { useState } from "react"

const List = () => {
  const [animalInput, setAnimalInput] = useState("")
  const [animalList, setAnimalList] = useState<string[]>([])
  return (
    <section className="list">
      <h2>List</h2>
      <div>
        <label htmlFor="animal">Your favorit animal</label>
        <input
          type="text"
          name="animal"
          id="animal"
          value={animalInput}
          onChange={(e) => {
            setAnimalInput(e.target.value)
          }}
        />
        <button
          disabled={animalInput.length === 0}
          onClick={() => {
            if (animalInput.length > 0) {
              setAnimalList([...animalList, animalInput])
              setAnimalInput("")
            }
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {animalList &&
          animalList.map((item, i) => {
            return <li key={i}>{item}</li>
          })}
      </ul>
    </section>
  )
}

export default List
