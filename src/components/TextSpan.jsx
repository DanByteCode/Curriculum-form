export default function TextSpan({ type = "span", info }){
  const SPAN = {
    h1: <h1>{info}</h1>,
    h2: <h2>{info}</h2>,
    h3: <h3>{info}</h3>,
    h4: <h4>{info}</h4>,
    span: <span>{info}</span>,
    p: <p>{info}</p>
  }
  return SPAN[type]
}