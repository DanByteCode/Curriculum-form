export default function Education({ data, setData }) {
  const educationList = data.education
  const handleEdit = (e, index) => {
    const field = e.target
    const w = educationList[index]
    w[field.name] = field.value
    setData({ ...data })
  }
  function deleteField(index) {
    educationList.splice(index, 1)
    setData({ ...data })
  }
  function createButton() {
    educationList.push({
      title: "",
      description: "",
    })
    setData({ ...data })
  }
  return (
    <>
      <h3>Education</h3>
      {educationList.map((education, index) => {
        return (
          <div className="field" key={index}>
                <button className="close-btn" title="Remove field" onClick={() => deleteField(index)}>×</button>
            <span>
              <label>
                Title:
                <input type="text" name="title" onChange={(e) => { handleEdit(e, index) }} value={education.title} />
              </label>
              <span>
              </span>
            </span><br />
            <textarea name="description" value={education.description} onChange={(e) => { handleEdit(e, index) }}></textarea>
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