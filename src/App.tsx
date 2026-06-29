import { Button, CssBaseline, TextField, Slider, Stack, Container, type SliderProps, colors, Typography, RadioGroup, FormControlLabel, Radio, alpha, Grid, useMediaQuery, Autocomplete } from "@mui/material"
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { createTheme, styled, ThemeProvider, useColorScheme } from '@mui/material/styles';
import { red, blue, purple, lime } from '@mui/material/colors';
import { CheckBox } from "@mui/icons-material";
import { zhCN } from '@mui/material/locale'

// Creating reusable styled components. creating a new Slider with custom css i.e styled(componentYouWantToCustomize). CustomSlider is just the styled version of Slider. This new component accepts the same props as a normal Slider.
// const CustomSlider = styled(Slider)<SliderProps>(({ theme }) => ({  // the extra parenthesis mean 'return'. we can also access the theme obj inside sx prop
//   width: theme.spacing(10), // 10* 8px = 80px
//   color: theme.palette.success.main,
//   '& .MuiSlider-thumb': {              // .MuiSlider-root .MuiSlider-thumb
//     '&:hover, &.Mui-focusVisible': {   // .MuiSlider-thumb:hover,  .MuiSlider-thumb.Mui-focusVisible
//       backgroundColor: 'red'
//     }
//   }
// }))

type CustomSliderProps = SliderProps & {  // CustomSlider component will accept all normal Slider props plus and optional error boolean.
  error?: boolean;  // ? means both these will be accepted: <CustomSlider /> and <CustomSlider error /> or <CustomSlider error={true} /> or <CustomSlider error={false} />
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

  // modifying default breakpoint pixels and adding new values such as 'mobile', 'tablet' etc. Gotta do module augmentation for that
  breakpoints: {
    values: {
      // xl: 700,
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200
    }
  },
  colorSchemes: {  // tells mui that this app supports both light and dark mode. but dark by default if i give dark: true;
    // dark: true
    dark: {
      palette: {  // a collection of colors: it has primary, secondary, error, warning, success, background
        primary: {
          main: '#543345' // default is blue
        }
      }
    },
    light: {
      palette: {
        primary: {
          main: alpha("#ff0000", 0.5)
        },
        secondary: purple,
        custom: { // custom is not recognized by mui so do module augmentation 
          main: lime[500]
        }  
      }
    }
  },
  typography: {
    fontFamily: 'Poppins',
    button: {  // setting fontsize inside all buttons that are under theme={theme}. targets variant='button' but also the MUI Button since they use theme.typography.button internally by default
      fontSize: '5rem'
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: 'contained'
      },

      // change the CSS of MUI buttons globally.
      styleOverrides: {  
        root: {   // .MuiButton-root
          // fontSize: '2rem',
          variants: [  // lets you apply different styles depending on the button's props.
            { props: {variant: 'outlined', color: 'secondary'}, style: {fontSize: '.5rem'}}, { props: {variant: 'dashed'}, style: {border: `4px dashed ${red[500]}`}}, { props: (props) => props.variant === 'dashed' && props.color !== 'secondary', style: {border: `2px dashed ${blue[500]}`}}  // when variant is outlined and color is secondary, use fontSize .5rem. 'dashed' is a custom variant we added. mui doesnt have it by default
          ]
        },
        // outlined: {}  // if the above syntax is hard for u, do this way instead (but u will have access to only a few properties here)
      }
    },
    // Global CSS Overrides. lets you write global CSS.   
    MuiCssBaseline: {
      // can use any name such as 'theme'
      styleOverrides: (themeParam) => `  
      // targets both <h1> and variant='h1'
      h1 {   
        color: ${themeParam.palette.success.main}
      }
      `
    }
  }
},
zhCN   // only translates internal text built into core MUI components to chinese. It has no control over the text you write inside your own components (like <Typography>H3</Typography>).
)

theme.typography.h3 = {    // targets variant='h3', not the <h3> element
  fontSize: '1.2rem', // Mobile/Default size
  '@media (min-width: 600px)': {
    fontSize: '1.5rem' // Tablet
  },
  [theme.breakpoints.up('laptop')]: {  // from the lg breakpoint and everything larger
    fontSize: '10rem' // Desktop
  }
}


function ThemeToggle() {
  const { mode, setMode } = useColorScheme();  // talks to the ThemeProvider. mui's setMode only understands the values 'light', 'dark', 'system'
  if (!mode) return null   // dont render anything until mode has a value

  return (
    <RadioGroup value={mode} onChange={(e) => setMode(e.target.value as 'system' | 'light' | 'dark')}>
      <FormControlLabel control={<Radio />} value='system' label='System' />
      <FormControlLabel control={<Radio />} value='light' label='Light' />
      {/* if selected, mode becomes 'dark' which tells the ThemeProvider to use the dark part of the theme now */}
      <FormControlLabel control={<Radio />} value='dark' label='Dark' />   
    </RadioGroup>
  )
}

// const useIsTablet = () => useMediaQuery("(min-width: 640px)")  // in another file suppose

function App() {
  const isTablet = useMediaQuery("(min-width: 640px)")
  // OR
  // const isTablet = useIsTablet();

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
    // <ThemeProvider theme={theme}>  
    // <CssBaseline />
    // <Container maxWidth='xs' sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    //   <Stack spacing={2}>
    //     <ThemeToggle />
    //     <CustomSlider error />
    //     {/* variant is contained and color is primary. which means the button has a background which is primary color (by default blue, but u can change in the palette) */}
    //     <Button>Submitt</Button>  
    //     <Button variant="outlined" color="secondary">Custom Variant</Button>
    //     {/* mui doesnt have 'dashed' by default. but u can create such custom variants using createTheme */}
    //     <Button variant="dashed">Dashed</Button> 
    //     <Button color="secondary">Secondary</Button>
    //     <Button color="custom">Lime</Button>
    //     {/* in light mode, color is red, in dark mode, it's blue */}
    //     <Button sx={[ {backgroundColor: 'red'}, (theme) => theme.applyStyles('dark', {backgroundColor: 'blue'})] }>Dark/Light</Button>  
    //     <Typography variant="h1">H1</Typography> 
    //   </Stack>
    // </Container>
    // </ThemeProvider>

    // <>
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    //   <Container maxWidth='laptop'>
    //     {/* container means it's the parent grid */}
    //     <Grid container spacing={2}>  
    //       <Grid size={{xs: 12, md: 6, xl: 4}}>  
    //         <Button fullWidth>1</Button>
    //       </Grid>
    //       <Grid size={{xs: 12, md: 6, xl: 4}}>
    //         <Button fullWidth>2</Button>
    //       </Grid>
    //       {/* its width will be calculated according to the widths of the other items in the grid */}
    //       <Grid size='grow'>  
    //         <Button fullWidth>3</Button>
    //       </Grid>
    //     </Grid>
    //     <Button sx={{ backgroundColor: 'green', [theme.breakpoints.between('xs', 'lg')] : {backgroundColor: 'red'}}}>Reponsive Button</Button>
    //   </Container>
    //   <Typography variant="h3">H3</Typography>
    //   {isTablet ? <>tablet</> : <>not tablet</>}
    // </ThemeProvider>
    // </>

    // <>
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    //   <Container maxWidth='md'>
    //     <Autocomplete sx={{width: 300}} renderInput={(params) => <TextField {...params} label='User' />} options={[]} />
    //   </Container>
    // </ThemeProvider>
    // </>

    <Button>BUTTON</Button>
  )   
}   

export default App
