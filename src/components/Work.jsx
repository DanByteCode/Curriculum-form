export default function Work({ data, setData }) {
  const works = data.work
  const handleEdit = (e, index) => {
    const field = e.target
    const w = works[index]
    w[field.name] = field.value
    setData({ ...data })
  }
  function deleteField(index) {
    works.splice(index, 1)
    setData({ ...data })
  }
  function createButton() {
    works.push({
      site: "",
      time: "",
      position: "",
      description: ""
    })
    setData({ ...data })
  }
  return (
    <>
      <h3>Experience</h3>
      {works.map((work, index) => {
        return (
          <div className="field" key={index}>
                <button className="close-btn" title="Remove field" onClick={() => deleteField(index)}>×</button>
            <span>
              <label>
                Site:
                <input type="text" name="site" onChange={(e) => { handleEdit(e, index) }} value={work.site} />
              </label>
              <label>
                Time:
                <input type="text" name="time" onChange={(e) => { handleEdit(e, index) }} value={work.time} />
              </label>
              <span>
              </span>
            </span><br />
            <input type="text" name="position" onChange={(e) => { handleEdit(e, index) }} value={work.position} />
            <textarea name="description" value={work.description} onChange={(e) => { handleEdit(e, index) }}></textarea>
            <span>
            </span>
          </div>
        )
      })}
      {
        <button onClick={createButton}>Add</button>
      }
    </>
  )
}