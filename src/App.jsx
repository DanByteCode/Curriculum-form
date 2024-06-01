import defaultData from './default.json'
import Curriculum from './components/Curriculum.jsx'
import Menu from './components/Menu.jsx'
import Form from './components/Form.jsx'
import image from '/default.webp'
import { useState } from 'react'
export default function App() {
  const [imgSrc, setSrc] = useState(image)
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("cv-data")
    return JSON.parse(localData) ?? defaultData
  }
  )

  return (
    <>
      <section className='generator'>
        <Menu data={data} />
        <Form setData={setData} data={data} setSrc={setSrc} imgSrc={imgSrc} />
      </section>
      <section className='result'>
        <Curriculum data={data} imgSrc={imgSrc} />
        <div className='options'></div>
      </section>
    </>
  )
}
//
