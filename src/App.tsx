import { Button, CssBaseline, TextField, Slider, Stack, Container } from "@mui/material"
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

function App() {
  return (
    <Container maxWidth='xs'>
      <Stack spacing={4}>
        {/* to remove default margins, paddings etc. */}
        <CssBaseline />  
        <TextField />
        <Slider />
        <Button startIcon={<AutoAwesomeRoundedIcon />} variant="contained">Submit</Button>
        <AutoAwesomeRoundedIcon color="error" />
      </Stack>
    </Container>
  )
}

export default App
