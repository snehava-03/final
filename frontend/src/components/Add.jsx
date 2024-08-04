import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    img_url: "",
  });

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addData = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    axios
      .post("http://localhost:3001/add", inputs)
      .then((res) => {
        alert("Blog post added successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert("There was an error adding the blog post. Please try again.");
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Box
        component="form"
        onSubmit={addData} // Handle form submission
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "600px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Title"
          onChange={inputHandler}
          name="title"
          value={inputs.title}
          fullWidth
          required // Ensure title is provided
        />
        <TextField
          variant="outlined"
          placeholder="Content"
          onChange={inputHandler}
          name="content"
          value={inputs.content}
          multiline // This enables multi-line input
          rows={4} // Number of rows visible
          required // Ensure content is provided
        />
        <TextField
          variant="outlined"
          placeholder="Image URL"
          onChange={inputHandler}
          name="img_url"
          value={inputs.img_url}
          required // Ensure image URL is provided
        />
        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Add;
