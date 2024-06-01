export default function Menu({ data }) {
  const saveData = () => {
    localStorage.setItem("cv-data", JSON.stringify(data))
  }
  const clearStorage = () => {
    localStorage.removeItem("cv-data")
  }
  const Print = () => {
    window.print()
  }
  return (
    <header>
      <h3>Fasty Curriculum</h3>
      <div className="menu">
        <button onClick={saveData}>Save</button>
        <button onClick={clearStorage}>Clear</button>
        <button onClick={Print}>Print</button>
      </div>
    </header>
  )
}