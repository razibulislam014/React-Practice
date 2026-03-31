import { useState } from "react";

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 3000);
  });
}

/**
 * Visual States:
 * Empty
 * typing
 * submiting
 * success
 * Error
 */
export default function Form() {
  // mandatory data state
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);

  // visual states
  const [status, setStatus] = useState("typing");

  if (status === "success") return <p>That's right!</p>;

  // handlers
  const handleTextChange = (e) => {
    setError(null);
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextChange}
          disabled={status === "submitting"}
        ></textarea>
        <br />
        <button disabled={status === "submitting" || answer === ""}>
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </form>
    </>
  );
}
