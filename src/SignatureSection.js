import { TextField, Button, Grid2, Typography } from "@mui/material";

function SignatureSection({ data, handleChange, onDataSubmit, isLocked }) {
  return (
    <>
      <Grid2 container className="signdiv">
        <Grid2 size={5}>
          <Typography>Name</Typography>
          <TextField
            name="parson1_name"
            className="textbox"
            type="text"
            value={data.parson1_name}
            onChange={handleChange}
            disabled={isLocked}
          />
        </Grid2>
        <Grid2 size={5}>
          <Typography>Date</Typography>
          <TextField
            name="parson1_dosing"
            className="textbox"
            type="date"
            value={data.parson1_dosing}
            onChange={handleChange}
            disabled={isLocked}
          />
        </Grid2>
        <Grid2 size={2}>
          <Button className="btnstyle" onClick={onDataSubmit} disabled={isLocked}>
            Submit
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
}

export default SignatureSection;
