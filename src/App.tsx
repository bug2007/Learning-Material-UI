import { Button, CssBaseline, TextField, Slider, Stack, Container, type SliderProps, colors, Typography } from "@mui/material"
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { red, blue } from '@mui/material/colors';

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

// Global theme overrides. will apply to everything but u gotta wrap everything with ThemeProvider for that
const theme = createTheme({  
  typography: {
    fontFamily: 'Poppins',
    button: {  // setting fontsize inside all buttons that are under theme={theme}
      fontSize: '5rem'
    }
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: 'contained'
      },

      // customize button stylings for all possible states and variants
      styleOverrides: {  
        root: {
          // fontSize: '2rem',
          variants: [
            { props: {variant: 'outlined', color: 'secondary'}, style: {fontSize: '.5rem'}}, { props: {variant: 'dashed'}, style: {border: `4px dashed ${red[500]}`}}, { props: (props) => props.variant === 'dashed' && props.color !== 'secondary', style: {border: `2px dashed ${blue[500]}`}}  // when variant is outlined and color is secondary, use fontSize .5rem. 'dashed' is a custom variant we added. mui doesnt have it by default
          ]
        },
        // outlined: {}  // if the above syntax is hard for u, do this way instead (but u will have access to only a few properties here)
      }
    },
    // Global CSS Overrides   
    MuiCssBaseline: {
      // can use any name such as 'theme'
      styleOverrides: (themeParam) => `  

      h1 {
        color: ${themeParam.palette.success.main}
      }
      `
    }
  }
})

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

    // can also define a 'theme2' and use ThemeProvider inside another ThemeProvider to apply differnt styles to another part of the app
    <ThemeProvider theme={theme}>  
    <CssBaseline />
    <Container maxWidth='xs' sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Stack spacing={2}>
        <CustomSlider error />
        <Button>Submitt</Button>
        <Button variant="outlined" color="secondary">Custom Variant</Button>
        {/* mui doesnt have 'dashed' by default. but u can create such custom variants using createTheme */}
        <Button variant="dashed">Dashed</Button> 
        <Typography variant="h1">H1</Typography> 
      </Stack>
    </Container>
    </ThemeProvider>

  
  )
}

export default App
