import { Button, CssBaseline, TextField, Slider, Stack, Container, type SliderProps, colors } from "@mui/material"
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { styled } from '@mui/material/styles';

// Creating reusable styled components
// const CustomSlider = styled(Slider)<SliderProps>(({ theme }) => ({  // the extra parenthesis mean 'return'. can also access the theme obj inside sx prop
//   width: theme.spacing(10), // 10* 8px = 80px
//   color: theme.palette.success.main,
//   '& .MuiSlider-thumb': {
//     '&:hover, &.Mui-focusVisible': {
//       backgroundColor: 'red'
//     }
//   }
// }))

type CustomSliderProps = SliderProps & {  // CustomSlider component will accept all normal Slider props plus and optional error boolean.
  error?: boolean;
}

const CustomSlider = styled(Slider, {shouldForwardProp: (prop) => prop !== 'error'})<CustomSliderProps>(({ theme, error }) => ({  // the extra parenthesis mean 'return'. can also access the theme obj inside sx prop, keep 'error' available for styling but dont pass it any further
  width: theme.spacing(10), // 10* 8px = 80px
  color: theme.palette.success.main,
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      backgroundColor: error? 'red' : 'green'
    }
  }
}))

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

    // <>
    // <CssBaseline />
    // <Container maxWidth='xs' sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    //   <Stack spacing={2}>
    //     <Slider disabled sx={{width: 100, color: 'success.main', '&.Mui-disabled': { '.MuiSlider-thumb': {backgroundColor: 'error.main'}, '&.Mui-disabled .MuiSlider-rail': {backgroundColor: 'error.main'}}}} />  
    //   </Stack>
    // </Container>
    // </>

    <>
    <CssBaseline />
    <Container maxWidth='xs' sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Stack spacing={2}>
        <CustomSlider error />
      </Stack>
    </Container>
    </>

  
  )
}

export default App
