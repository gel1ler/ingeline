import React, { useState } from 'react'
import Sticker from '../Sticker'
import { Typography, TextField, Button, Box } from '@mui/material'
import SureModal from './SureModal'
import Field from '../Field'

const Form = ({ fullwidth }) => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <Box
      sx={{
        width: fullwidth ? '97%' : '30vw',
        mx: fullwidth ? 'auto' : null,
        minWidth: ['300px', '300px', '300px', '400px'],
        maxWidth: '900px',
        height: 'max-content',
        bgcolor: 'white',
        p: 4,
        position: 'relative',
      }}
      className="shadow"
    >
      <SureModal open={open} setOpen={setOpen} />
      <Sticker />
      <Box className='column-centered' sx={{ gap: 2, width: '100%' }}>
        <Typography variant='h5' textAlign='center'>
          Обратный звонок
        </Typography>
        <Field
          label="Наименование орагнизации"
          value={name}
          setValue={setName}
        />
        <Field
          label="Номер телефона"
          value={phone}
          setValue={setPhone}
        />
        <Button color='secondary' variant='contained' sx={{ mt: 2 }} onClick={() => setOpen(true)}>
          Оставить заявку
        </Button>
      </Box>
    </Box >
  )
}

export default Form