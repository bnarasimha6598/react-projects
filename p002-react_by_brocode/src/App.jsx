import "bootstrap/dist/css/bootstrap.css";

import Header from "./components/Header";
import Food from "./components/Food";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Student from "./components/Student";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <>
      <Header />
      <Food></Food>
      <Footer />

      <br />
      <hr />
      <br />

      <Card />
      <Card />

      <br />
      <hr />
      <br />

      {
        //Component styles can be of 3 types
        // External : global css files
        // modules : separate css file for each component
        // inline : within the component function, best used for small component with simple styling
      }
      <Button />

      <br />
      <hr />
      <br />

      <Student name="Narasimha" age={26} isStudent={false} />
      <Student name="Prajwal" age={28} isStudent={true} />
      <Student />

      <br />
      <hr />
      <br />

      <UserGreeting isLoggedIn={false} username="Narasimha" />
      <UserGreeting isLoggedIn={true} username="Narasimha" />
    </>
  );
}

export default App;
