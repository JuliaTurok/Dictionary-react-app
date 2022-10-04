import React, { useState } from "react";

export default function LoginForm() {
  let [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Keyword" onChange={updateKeyword} />

      <input type="submit" value="Submit" />
    </form>
  );
}
