import React, { createContext, useState } from 'react'
export const Context = createContext();
export const ContextProvider = ({children}) => {
    const [data, setData] = useState({
        sign_data : [{
            person_n:'person_1_name',
            person_d:'person_1_date',
            parson_name: '',
            parson_dosing : ''},
           { 
            person_n:'person_1_name',
            person_d:'person_1_date',
            parson_name: '',
            parson_dosing : '',}],
        t_n_P_sec : [{ 
            label : 'Has the member of staff completed training on the safe handling of medicines?', 
            value:'yes'},
            { 
            label : 'Has the member of staff read the medication policy and signed to indicate that they have done so?', 
            value:'yes'},
            { 
            label : 'Does the member of staff know to access the medication policy if they wish to check any information?', 
            value:'yes'}],
        a_of_medicine : [{ 
            label : 'Did the member of staff wash their hands before starting to administer any medication and follow appropriate hygine measure throughout the medication round? E.g. wear gloves when applying creams.', 
            value:'yes'},
            { 
            label : 'Did the member of staff make sure that everything was properly prepared before starting the medication round. e.g. was there plenty of medication cups, jug of water, beakers etc', 
            value:'yes'},]
    }); 
  return (
    <Context.Provider value={{data, setData}}>{children}</Context.Provider>
  )
}

