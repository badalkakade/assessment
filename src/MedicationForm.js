import React, { useContext, useState } from "react";
import { Button, Grid2 } from "@mui/material";
import SignatureSection from "./SignatureSection";
import FormSection from "./FormSection";
import { Context } from "./context/Context";

function MedicationForm({ onSubmit }) {
    const { data, setData } = useContext(Context);
    const [signSecond, setSignSecond] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    const handleFormChange = (e, section, index) => {
        const updatedData = { ...data };
        updatedData[section][index].value = e.target.value;
        setData(updatedData);
    };

    const handleSignatureChange = (e, index) => {
        const updatedData = { ...data };
        updatedData.sign_data[index][e.target.name] = e.target.value;
        setData(updatedData);
    };

    const handleInitialSubmit = () => {
        setIsLocked(true);
        setSignSecond(true);
    };

    const handleFinalSubmit = () => {
        console.log("Form archived: ", data);
        localStorage.setItem('medication_assessment', JSON.stringify(data));
    };

    return (
        <Grid2 container className="formsect">
            <Grid2 size={12}>
                <h2>Training and Policy</h2>
                {data.t_n_P_sec.map((item, index) => (
                    <FormSection 
                        key={index} 
                        data={item} 
                        handleChange={(e) => handleFormChange(e, 't_n_P_sec', index)} 
                        isLocked={isLocked} 
                    />
                ))}
            </Grid2>
            <Grid2 size={12}>
                <h2>Administration of Medicines</h2>
                {data.a_of_medicine.map((item, index) => (
                    <FormSection 
                        key={index} 
                        data={item} 
                        handleChange={(e) => handleFormChange(e, 'a_of_medicine', index)} 
                        isLocked={isLocked} 
                    />
                ))}
            </Grid2>
            <Grid2 size={12}>
                <h2>Signature of All Involved Persons in Assessment Required</h2>
                <SignatureSection 
                    data={data.sign_data[0]} 
                    handleChange={(e) => handleSignatureChange(e, 0)} 
                    onDataSubmit={handleInitialSubmit} 
                    isLocked={isLocked} 
                />
                {signSecond && (
                    <SignatureSection 
                        data={data.sign_data[1]} 
                        handleChange={(e) => handleSignatureChange(e, 1)} 
                        onDataSubmit={handleFinalSubmit} 
                        isLocked={false}
                    />
                )}
            </Grid2>
        </Grid2>
    );
}

export default MedicationForm;
