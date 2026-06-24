import { Button, CssBaseline, TextField, Slider, Stack, Container } from "@mui/material"
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

function App() {
  return (
    // <>
    // <CssBaseline />  
    // <Container maxWidth='xs'>
    //   <Stack spacing={4}>
    //     {/* to remove default margins, paddings etc. */}
    //     <TextField />
    //     <Slider />
    //     <Button startIcon={<AutoAwesomeRoundedIcon />} variant="contained">Submit</Button>
    //     <AutoAwesomeRoundedIcon color="error" />
    //   </Stack>
    // </Container>
    // </>

    // <>
    // <CssBaseline />
    // <Container maxWidth='xs' sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    //   <Stack spacing={2}>
    //     {/* look at the inspect panel to find the class names such as MuiSlider-thumb. '&' is equivalent to the root class name which is 'MuiSlider-root' */}
    //     <Slider sx={{width: 100, color: 'success.main', ':hover': {backgroundColor: 'yellow'},  '& .MuiSlider-thumb': { backgroundColor: 'red', ':hover': {backgroundColor: 'blue'} }}} />  
    //   </Stack>
    // </Container>
    // </>

    <>
    <CssBaseline />
    <Container maxWidth='xs' sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Stack spacing={2}>
        <Slider disabled sx={{width: 100, color: 'success.main', '&.Mui-disabled': { '.MuiSlider-thumb': {backgroundColor: 'error.main'}, '&.Mui-disabled .MuiSlider-rail': {backgroundColor: 'error.main'}}}} />  
      </Stack>
    </Container>
    </>
  )
}

export default App
