import "./Body.css";

function Body(props)
{
  const {name, location, favorList = []} = props;
  console.log(name, location);
    return (
    <div className="body">
      {name}은 {location}에 삽니다.
      <br />
      {favorList.length}개의 좋아하는 음식이 있습니다.
    </div>
  );
}

export default Body;