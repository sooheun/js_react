import "./Body.css";

function Body(props)
{
  const {name, location} = props;
  console.log(name, location);
    return <div className="body">{name}은 {location}에 삽니다.</div>
}

export default Body;