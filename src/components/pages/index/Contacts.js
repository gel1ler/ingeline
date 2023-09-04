import React from 'react'
import { Box, Typography } from '@mui/material'
import Subtitle from '@/components/UI/Subtitle'

const Contacts = () => {
  return (
    <Box sx={{ mt: 10, py: 5, minHeight: '100vh' }} id='contacts_anchor' data-aos='fade-right'>
      <Subtitle>
        Контакты
      </Subtitle>
      <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'], gap: 5, minHeight: '70vh' }} >
        <Box sx={{ textAlign: ['center', 'center', 'left'] }} data-aos='fade-up'>
          <Typography variant="h4" fontWeight='bold' sx={{ my: 1 }}>
            Производственный отдел
          </Typography>
          <Typography variant="h6">
            <b>Телефон:</b> 8(989)801-23-91
          </Typography>
          <Typography variant="h6">
            <b>Адрес:</b> рабочий посёлок Первомайский, ул. Школьная 9
          </Typography>

          <Typography variant="h4" fontWeight='bold' sx={{ mt: 4, mb: 1 }}>
            Офис
          </Typography>
          <Typography variant="h6">
            <b>Телефон:</b> 8(989)801-23-91
          </Typography>
          <Typography variant="h6">
            <b>Адрес:</b> Раменское, Северное ш. 10
          </Typography>
        </Box>
        <iframe
          data-aos='fade-up'
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A711ea37dc3a1461d53cb66acc3637e91b23c8492ed19997ddb60495aa5a2ae09&amp;source=constructor"
          frameBorder="0"
          style={{ width: '100%', height: '100%', boxShadow: '0px 5px 20px 1px rgba(34, 60, 80, 0.2)', minHeight: '50vh' }}
        />
      </Box>
    </Box>
  )
}

export default Contacts