export default function CV({ data, imgSrc }) {
  return (
    <section className="page preview">
      <article className="main">
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
        <h3>About Me</h3>
        <span>{data.about}</span>
        <hr />
        <h2>Experience</h2>
        {
          data.work.map((w, index) => {
            return <span key={`w-${index}`}>
              <span className="title-section">
                <h3>{w.site} </h3><span>| <i>{w.time}</i></span>
              </span>
              {w.position ?? <h4>{w.position}</h4>}
              <p>{w.description}</p>
            </span>
          })
        }
        <hr />
        <h2>Education</h2>
        {
          data.education.map((w, index) => {
            return <span key={`e-${index}`}>
              <h3>{w.title} </h3>
              <p>{w.description}</p>
            </span>
          })
        }
      </article>
      <aside>
        <img src={imgSrc} alt="Photo" width="150" height="150" />
        <h2>Contact</h2>
        {
          data.contact.map((contact) => {
            return <span key={contact.type}>
              <img src={`src/assets/icon/${contact.type}.svg`} alt={contact.type} /> {contact.info}</span>
          })
        }
      </aside>
    </section>
  )
}