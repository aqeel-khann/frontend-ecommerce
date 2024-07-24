import { TextField, Button } from "@mui/material";
import React from "react";

export const Signup = () => {
  return (
    <div className="w-full h-screen flex justify-cenetr align-cenetr  text-center">
      <div className="w-full sm:w-1/3 border border-black m-auto">
        <h1 className="font-bold text-2xl m-3">Create Account</h1>
        <form className="p-3">
          <div className="mb-7">
            <TextField
              required
              id="outlined-required"
              label="Name"
              placeholder="Enetr Your Name"
              className="w-full sm:w-full"
            />
          </div>
          <div className="mb-7">
            <TextField
              required
              id="outlined-required"
              label="email"
              placeholder="Enetr Your Name"
              className="w-full sm:w-full"
            />
          </div>
          <div className="mb-7">
            <TextField
              required
              id="outlined-required"
              label="password"
              type="password"
              placeholder="Enetr Your Name"
              className="w-full sm:w-full"
            />
          </div>
          <div>
            <Button variant="contained" type="submit">
              Contained
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
