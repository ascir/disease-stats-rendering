import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const diseaseOptions = [
    {text: "Coronavirus", value: "cov"},
    {text: "Typhoid", value: "typ"},
    {text: "Cholera", value: "cho"},
    {text: "Depression" , value: "dep"},
    {text: "Tuberculosis", value: "tb"},
    {text: "Eczema", value: "ecz"},
    {text: "Ebola", value: "eb"},
    {text: "Cancer", value: "can"},
    {text: "Pneumonia", value: "pne"},
    {text: "Diptheria", value: "dip"}
]

const FilterByDisease = () => (
    <Dropdown
      placeholder='Select Disease'
      fluid
      search
      selection
      options={diseaseOptions}
    />
  );

  export default FilterByDisease;
  