import Form from "./components/Form";

const statuses = ["empty", "typing", "submitting", "success", "error"];

export default function App() {
  return (
    <div>
      <h1>City quiz</h1>
      <p>What city is located on two continents?</p>
      
        <Form  />
      
    </div>
  );
}
