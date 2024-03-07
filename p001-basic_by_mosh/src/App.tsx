import { useState } from "react";

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  var items = ["Delhi", "Mumbai", "Ayodhya", "Mathura", "Bangalore"];

  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="App">
      {/* {ListGroup} */}
      <ListGroup
        items={items}
        heading="Indian Cities"
        onSelectItem={handleSelectItem}
      />
      <br />
      <br />

      {/* {Alert} */}
      <Alert color="info" onClose={() => setAlertVisibility(false)}>
        Hello <span>World</span> !
      </Alert>
      <br />
      <br />

      {/* {Button} */}
      {alertVisible && (
        <Alert color="warning" onClose={() => setAlertVisibility(false)}>
          My Alert
        </Alert>
      )}
      <Button
        color="danger"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
