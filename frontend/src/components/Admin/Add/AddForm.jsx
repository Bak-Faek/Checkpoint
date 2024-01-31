import React, { useState, useEffect } from "react";

export default function AdminAddForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [perfume, setPerfume] = useState([]);
  const [colors, setColors] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerfume = async () => {
      try {
        const response = await fetch(
          "http://localhost:3310/api/candle/perfume"
        );
        const data = await response.json();
        setPerfume(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPerfume();
  }, []);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/candle/colors");
        const data = await response.json();
        setColors(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchColors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3310/api/candle/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          perfume,
          colors,
        }),
      });

      if (response.status === 201) {
        setIsSuccess(true);
        setName("");
        setDescription("");
      } else {
        console.error("Failed to add recipe");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        {/* Render select inputs for perfume and colors */}
        <button type="submit">Submit</button>
      </form>
      {error && <p>Error: {error}</p>}
      {isSuccess && <p>Recipe added successfully!</p>}
    </section>
  );
}
