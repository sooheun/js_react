import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function App()
{
  const bodyProps = {
    name: "이수흔",
    location: "대구시",
    favorList: ["파스타", "빵", "떡볶이"]
  };
  return (
    <div className="App">
      <Header />
      <Body {...bodyProps} />
      <Footer />
    </div>
  );
}

export default App
