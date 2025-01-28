import React from "react";
import { TextField, Button } from "@mui/material";
import { LinkedIn, GitHub, LocationOn, Email, Phone } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="bg-black text-white p-6 md:p-10 min-h-auto flex flex-col md:flex-row items-center justify-center">
      {/* Left Section */}
      <div className="flex flex-col justify-center md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <h3 className="text-2xl font-semibold mb-2">What's your story?</h3>
        <p className="text-lg mb-6">
          Always available for freelancing if the right project comes along. Feel free to contact me.
        </p>
        <div className="mb-4 space-y-4">
          <p className="flex items-center">
            <LocationOn className="mr-2 text-yellow-500" /> Khairpur mir's, Pakistan
          </p>
          <p className="flex items-center">
            <Email className="mr-2 text-yellow-500" /> abduljaleelxwave@gmail.com
          </p>
          <p className="flex items-center">
            <Phone className="mr-2 text-yellow-500" /> +923091375325
          </p>
        </div>

        <div className="flex space-x-4">
          {/* LinkedIn Icon */}
          <div className="group bg-gray-800 rounded-full p-2 transition duration-300 hover:bg-yellow-500">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl flex items-center justify-center"
            >
              <LinkedIn className="group-hover:fill-white" />
            </a>
          </div>

          {/* GitHub Icon */}
          <div className="group bg-gray-800 rounded-full p-2 transition duration-300 hover:bg-yellow-500">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl flex items-center justify-center"
            >
              <GitHub className="group-hover:fill-white" />
            </a>
          </div>
        </div>




      </div>

      {/* Right Section */}


      <div className="md:w-1/2 flex flex-col">
        <form
          action="https://formspree.io/f/manqqrbr" // Ensure this endpoint is correctly set up in Formspree.
          method="POST"
          className="w-full space-y-4"
        >
          {/* Name and Email */}
          <div className="flex flex-wrap md:flex-nowrap space-y-4 md:space-y-0 md:space-x-4">
            <TextField
              label="Your Name"
              name="name"
              variant="outlined"
              className="w-full"
              InputProps={{
                style: {
                  backgroundColor: "#333",
                  color: "white",
                  borderRadius: "16px", // Rounded corners
                },
              }}
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px", // Ensure full rounded corners
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFD700", // Golden outline on focus
                },
              }}
            />
            <TextField
              label="Your Email"
              name="email"
              type="email"
              variant="outlined"
              className="w-full"
              InputProps={{
                style: {
                  backgroundColor: "#333",
                  color: "white",
                  borderRadius: "16px", // Rounded corners
                },
              }}
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px", // Ensure full rounded corners
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFD700", // Golden outline on focus
                },
              }}
            />
          </div>
          {/* Subject */}
          <TextField
            label="Subject"
            name="subject"
            variant="outlined"
            className="w-full"
            InputProps={{
              style: {
                backgroundColor: "#333",
                color: "white",
                borderRadius: "16px", // Rounded corners
              },
            }}
            InputLabelProps={{ style: { color: "white" } }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px", // Ensure full rounded corners
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#FFD700", // Golden outline on focus
              },
            }}
          />
          {/* Message */}
          <TextField
            label="Your Message"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            className="w-full"
            InputProps={{
              style: {
                backgroundColor: "#333",
                color: "white",
                borderRadius: "16px", // Rounded corners
              },
            }}
            InputLabelProps={{ style: { color: "white" } }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px", // Ensure full rounded corners
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#FFD700", // Golden outline on focus
              },
            }}
          />
          {/* Button */}
          <Button
            type="submit"
            variant="contained"
            className="w-full"
            style={{
              backgroundColor: "#FF9800",
              color: "white",
              borderRadius: "16px", // Rounded button
              padding: "10px 16px",
              fontWeight: "bold",
            }}
          >
            Send Message
          </Button>
        </form>
      </div>



    </div>
  );
};

export default Contact;