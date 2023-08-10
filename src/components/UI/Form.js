import React from 'react'
import Sticker from './Sticker'
import { Typography, TextField, Button, Box } from '@mui/material'

const Form = () => {
  return (
    <Box
      sx={{
        width: '30vw',
        minWidth: '400px',
        maxWidth: '900px',
        height: 'max-content',
        bgcolor: 'white',
        p: 4,
        position: 'relative',
      }}
      className="shadow"
    >
      <Sticker />
      <Box className='column-centered' sx={{ gap: 2, width: '100%' }}>
        <Typography variant='h5' textAlign='center'>
          Оставьте заявку
        </Typography>
        <TextField label="Наименование орагнизации" sx={{ width: '80%' }} color='secondary' />
        <TextField label="Эл. почта" sx={{ width: '80%' }} color='secondary' />
        <TextField label="Изделие" sx={{ width: '80%' }} color='secondary' />
        <Button color='secondary' variant='contained' sx={{ mt: 2 }}>
          Отправить
        </Button>
      </Box>
    </Box>
  )
}

export default Form