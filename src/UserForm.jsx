import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  // add error state here
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    // เพิ่ม requirement ตรงนี้
    if (username.trim().length < 3) {
      setError("Username must be at least 3 characters long")
      setIsSubmitted(false);
      return;
    }
    setError("");
    alert(`Submitted: ${username}`);
    setUsername("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        {/* Error Message */}
        {error && <p>{error}</p>}
      </label>
      <button 
      type="submit"
      disabled={!isSubmitted}
      >
        Submit
      </button>
    </form>
  );
}
