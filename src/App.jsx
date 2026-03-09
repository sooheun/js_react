import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function App()
{
  const name = "이수흔";
  return (
    <div className="App">
      <Header />
      <Body name={name} location={"대구시"}/>
      <Footer />
    </div>
  );
}

export default App
