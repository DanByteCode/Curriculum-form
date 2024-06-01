export default function InputBox({inputName, data, setData}) {
  const handleEdit = (e) => {
    setData({ ...data, [inputName]: e.target.value })
  }
  return (<input value={data[inputName]} onChange={handleEdit} autoFocus/>)
}