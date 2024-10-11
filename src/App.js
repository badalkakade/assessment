import MedicationForm from "./MedicationForm";
import HistoricalAssessments from "./HistoricalAssessments";
import { Grid2 } from "@mui/material";
import Person2Icon from '@mui/icons-material/Person2';
import './Style.scss'

function App() {
  return (
    <Grid2 container className='userdisplay'>
      <Grid2 size={12} className='userheader'><Person2Icon sx={{colors:'#00a186'}} /> Harish's Competency</Grid2>
      <Grid2 container className='userdiv' >
        <Grid2 size={9}><MedicationForm /></Grid2>
        <Grid2 size={3}><HistoricalAssessments /></Grid2>
      </Grid2>
    </Grid2>
  );
}

export default App;
