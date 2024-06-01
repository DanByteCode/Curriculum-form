import InputBox from './InputBox'
import Contact from './Contact.jsx'
import Photo from './Photo.jsx';
import Work from './Work.jsx';
import Education from './Education.jsx';
export default function CV({ data, setData, imgSrc, setSrc }) {
  return (
    <section className="page">
      <article className="main">
        <InputBox inputName="name" data={data} setData={setData} />
        <InputBox inputName="title" data={data} setData={setData} />
        <InputBox inputName="about" data={data} setData={setData} />
        <hr />
        <Work data={data} setData={setData} />
        <hr />
        <Education data={data} setData={setData}/>
      </article>
      <aside>
        <Photo setSrc={setSrc} imgSrc={imgSrc}/>
        <Contact data={data} setData={setData}/>
      </aside>
    </section>
  )
}
