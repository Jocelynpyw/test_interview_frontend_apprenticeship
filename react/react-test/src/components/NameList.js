import "../App.css";

const NameList = () => {
  const names = ["Alice", "Bob", "Charlie", "David"];

  return (
    <div className="container">
      <h2>Name List</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
