import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

function HistoricalAssessments() {
  const [historicalData, setHistoricalData] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('medication_assessment'));
    if (savedData) {
      setHistoricalData(savedData);
    }
  });

  return (
    <div>
      <h2>Historical Assessments</h2>
      {historicalData ? (
        historicalData.sign_data.map((data, index) => (
          <div key={index}>
            <Typography>{data.parson1_name} {data.parson1_dosing}</Typography>
          </div>
        ))
      ) : (
        <Typography>No historical data available.</Typography>
      )}
    </div>
  );
}

export default HistoricalAssessments;
