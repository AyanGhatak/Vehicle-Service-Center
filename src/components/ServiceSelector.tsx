import { Autocomplete, TextField } from "@mui/material";

export default function ServiceSelector() {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={topFilms}
        renderInput={(params) => <TextField {...params} label="Search Service Center" />}
      />
    );
  }

  const topFilms = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    }]