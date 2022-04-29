import { Autocomplete, TextField } from "@mui/material";
import centers from "./centers";

export default function ServiceSelector() {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={vals}
        renderInput={(params) => {
          return <TextField {...params} label="Search Service Center" />
        }}
      />
    );
  }

  const vals = centers.map((center) => {
    const text = `Name: ${center.name}, Address: ${center.add}`
    return {
      label: text
    }
  })
