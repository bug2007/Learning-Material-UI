import '@mui/material'

// so that typescript can recognize stuff such as custom variants e.g 'dashed'. mui doesnt have these by default

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        dashed: true;
    }
}