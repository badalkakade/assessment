import { FormControlLabel, Grid2, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'

const FormSection = ({data, handleChange}) => {
  return (
    <RadioGroup name="washedHands" value={data.value} onChange={handleChange}>
        <Grid2 container>
            <Typography>{data.label}</Typography>
            <Grid2 size={12}>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </Grid2>
        </Grid2>
    </RadioGroup>
  )
}

export default FormSection
