/* eslint-disable */

// components
import { Card, TextField, FormControl, FormControlLabel, RadioGroup, Radio } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function About() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-start gap-4 w-full h-full">
        <Card
          sx={{ boxShadow: "1px 1px 5px #808080" }}
          className="flex flex-col gap-4 w-full h-full max-w-[300px] p-4"
        >
          <p className="text-xl text-center">Profile Image</p>
          <figure className="rounded-full border-2 border-gray-300 cursor-pointer">
            <img className="rounded-full w-full" src="/images/march7.jpg" />
          </figure>
        </Card>
        <Card
          sx={{ boxShadow: "1px 1px 5px #808080" }}
          className="flex flex-col w-full h-full gap-4 p-4"
        >
          <p className="text-xl text-center">Information</p>
          <div className="flex gap-4">
            <TextField
              type="text"
              className="w-1/4"
              id="fname"
              label="First Name"
              variant="outlined"
              size="small"
            />
            <TextField
              type="text"
              className="w-1/4"
              id="lname"
              label="Last Name"
              variant="outlined"
              size="small"
            />
            <TextField
              type="number"
              className="w-1/4"
              id="age"
              label="Age"
              variant="outlined"
              size="small"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Birthday"
                className="w-1/4"
                slotProps={{ textField: { variant: "outlined", size: "small" } }}
              />
            </LocalizationProvider>
          </div>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              row
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <div>
            <TextField
              type="text"
              id="about"
              label="About Me"
              variant="outlined"
              sx={{
                width: "100%",
                "& .MuiInputBase-root": {
                  height: "154px",
                },
              }}
            />
          </div>
        </Card>
      </div>
      <div className="flex justify-between items-start gap-4">
        <Card
          sx={{ boxShadow: "1px 1px 5px #808080" }}
          className="flex flex-col w-full h-full gap-4 p-4"
        >
          <p className="text-xl text-center">Education</p>
          <div className="flex justify-between items-center gap-4">
            <TextField
              className="w-full"
              type="text"
              id="education"
              label="University Name"
              variant="outlined"
              size="small"
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Start Date"
                className="w-1/2"
                slotProps={{ textField: { variant: "outlined", size: "small" } }}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Graduation Date"
                className="w-1/2"
                slotProps={{ textField: { variant: "outlined", size: "small" } }}
              />
            </LocalizationProvider>
          </div>
        </Card>
        <Card
          sx={{ boxShadow: "1px 1px 5px #808080" }}
          className="flex flex-col w-full h-full gap-4 p-4"
        >
          <p className="text-xl text-center">Interests</p>
          <div className="grid grid-cols-2 gap-4">
            <TextField
              type="text"
              id="interest1"
              label="Interest"
              variant="outlined"
              size="small"
            />
            <TextField
              type="text"
              id="interest2"
              label="Interest"
              variant="outlined"
              size="small"
            />
            <TextField
              type="text"
              id="interest3"
              label="Interest"
              variant="outlined"
              size="small"
            />
            <TextField
              type="text"
              id="interest4"
              label="Interest"
              variant="outlined"
              size="small"
            />
          </div>
        </Card>
      </div>
      <Card
        sx={{ boxShadow: "1px 1px 5px #808080" }}
        className="flex flex-col w-full h-full gap-4 p-4"
      >
        <p className="text-xl text-center">Work Experience</p>
        <div className="flex gap-4">
          <TextField
            className="w-1/4"
            type="text"
            id="career"
            label="Career Name"
            variant="outlined"
            size="small"
          />
          <TextField
            className="w-1/4"
            type="text"
            id="company"
            label="Company Name"
            variant="outlined"
            size="small"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              className="w-1/4"
              slotProps={{ textField: { variant: "outlined", size: "small" } }}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End Date"
              className="w-1/4"
              slotProps={{ textField: { variant: "outlined", size: "small" } }}
            />
          </LocalizationProvider>
        </div>
        <TextField
          type="text"
          id="detail1"
          label="Detail"
          variant="outlined"
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              height: "154px",
            },
          }}
        />
        <TextField
          type="text"
          id="detail2"
          label="Detail"
          variant="outlined"
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              height: "154px",
            },
          }}
        />
      </Card>
      <div className="flex justify-end items-center gap-4">
        <button className="bg-red-700 hover:bg-red-900 transition-all ease-in-out duration-300 rounded-md text-white text-xl px-4 w-[200px] h-[40px]">
          Clear
        </button>
        <button className="bg-blue-700 hover:bg-blue-900 transition-all ease-in-out duration-300 rounded-md text-white text-xl px-4 w-[200px] h-[40px]">
          Save
        </button>
      </div>
    </div>
  );
}

export default About;
