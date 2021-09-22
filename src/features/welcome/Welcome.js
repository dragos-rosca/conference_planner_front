import React from 'react'
import { Typography, Grid, InputAdornment } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import CustomTextField from '@bit/totalsoft_oss.react-mui.custom-text-field'
import IconButton from '@bit/totalsoft_oss.react-mui.icon-button'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn'

function Welcome() {
  const { t } = useTranslation()

  return (
    <Grid container direction='column' alignItems='center' spacing={10}>
      <Grid item>
        <Typography variant='h5'>{t('LandingPage.Title')}</Typography>
      </Grid>
      <Grid container item direction='column' alignItems='center'>
        <Grid item>
          <Typography variant='caption'>{t('LandingPage.Subtitle')}</Typography>
        </Grid>
        <Grid item>
          <CustomTextField
            endAdornment={
              <InputAdornment position='end'>
                <IconButton size='small' color='theme' aria-label='go'>
                  <KeyboardReturnIcon fontSize='small' />
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Welcome
