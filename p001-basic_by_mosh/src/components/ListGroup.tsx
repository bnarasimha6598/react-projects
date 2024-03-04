function ListGroup() {
  var items = ["Delhi", "Mumbai", "Ayodhya", "Mathura", "Bangalore"];
  //   items = [];

  return (
    <>
      <h1>List Group</h1>

      {items.length === 0 && (
        <>
          <h1>List Group</h1>
          <p>No item found</p>
        </>
      )}

      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
