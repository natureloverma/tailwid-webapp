// App.jsx
import "./App.css";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer";
import University from "./University";
import Approach from "./Approach";
import Offer from "./Offer";
import Resource from "./Resource";
import Trust from "./Trust";
import TopStories from "./TopStories";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <University />
      <Approach />
      <Offer />
      <Resource />
      <TopStories />
      <Trust />
      <Footer />
    </div>
  );
}

export default App;
