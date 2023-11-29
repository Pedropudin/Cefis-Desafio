const Title = ({text}) => {
  return <h1 className="bigTitle">{text}</h1>;
}

const Button = ({text,link}) => {
  return <button className="square">{text}</button>
};

export default function page() {
  return (
    <>
    <Title text="Nome"/>
    <Button text="name"/>
    </>
  )
}
