const socialList = ['Number', 'Email', 'Facebook', 'Linkedin', 'Twitter', 'GitHub']
export default function Contact({ data, setData }) {
  const contacts = data.contact
  const cList = contactList()
  const handleEdit = (e, index) => {
    contacts[index].info = e.target.value
    setData({ ...data })
  }
  function deleteField(index) {
    contacts.splice(index, 1)
    setData({ ...data })
  }
  function upPos(index) {
    const temp = contacts[index]
    contacts[index] = contacts[index - 1]
    contacts[index - 1] = temp
    setData({ ...data })
  }
  function downPos(index) {
    const temp = contacts[index]
    contacts[index] = contacts[index + 1]
    contacts[index + 1] = temp
    setData({ ...data })
  }
  function contactList() {
    return socialList.filter((s) => {
      return !contacts.some((e) => {
        return e.type == s
      })
    })
  }
  function createButton() {
    const field = document.getElementById('social').value
    contacts.push({ type: field, info: '' })
    setData({ ...data })
  }
  return (
    <>
      <h3>Contact</h3>
      {contacts.map((contact, index) => {
        return (
          <div key={contact.type}  className="contact-field">
            <span>
              <span>
              <button title="Up field" onClick={() => upPos(index)} disabled={index == 0} >▲</button>
              <button title="Down field" onClick={() => downPos(index)} disabled={index == contacts.length - 1}>▼</button>
              {contact.type}
              </span>
              <button title="Remove field" onClick={() => deleteField(index)}>×</button>
            </span>
            <br />
            <span>
              <img src={`src/assets/icon/${contact.type}.svg`} alt={contact.type} />
              <input name={contact.type} value={contact.info} onChange={(e) => { handleEdit(e, index) }}></input>
            </span>
          </div>
        )
      })}
      {
        cList.length > 0 && <span>
          <select name="social" id="social">
            {
              cList.map(s => <option key={`social-${s}`} value={s}>{s}</option>)
            }
          </select> <button onClick={createButton}>Add</button>
        </span>
      }
    </>
  )
}