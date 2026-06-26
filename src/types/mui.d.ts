import '@mui/material'

// so that typescript can recognize stuff such as custom variants e.g 'dashed'. mui doesnt have these by default

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        dashed: true;
    }
    interface ButtonPropsColorOverrides {
        custom: true
    }
}

declare module '@mui/material/styles' {
    interface Palette {  // when u r using the theme, typescript uses Palette
        custom: Palette['primary']  // so custom will have things such as main, light, dark, contrastText just like primary has
    }
    interface PaletteOptions {   // when u r building the theme, typescript uses PaletteOptions
        custom?: PaletteOptions['primary']  // providing custom is optional inside createTheme, just like light, dark, contrastText etc. are and not the 'main'
    }
}