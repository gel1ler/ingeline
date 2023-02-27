import { Box, Container, Typography } from "@mui/material"
import React from "react"
import Layout from '../components/Layout/Layout'
import Start from "@/components/Start"
import Subtitle from "@/components/UI/Subtitle"

export default function Home() {
  return (
    <Layout>
      <Start />
      <Container sx={{ my: 7 }}>
        <Box id='about_anchor'>
          <Subtitle>
            О компании
          </Subtitle>
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'], gap: 10 }}>
            <Box sx={{ width: '100%', height: '600px', bgcolor: 'grey' }} />
            <Typography variant="h6" textAlign='center' >
              Elit enim ullamco consectetur ea velit veniam aute. Incididunt proident ipsum ut elit ad qui adipisicing id proident laboris irure magna.
              Ullamco esse ad sunt nulla ad magna mollit aliquip quis incididunt. Qui mollit culpa ad adipisicing laboris non dolore amet elit velit cupidatat et.
              Elit enim ullamco consectetur ea velit veniam aute. Incididunt proident ipsum ut elit ad qui adipisicing id proident laboris irure magna.
              Ullamco esse ad sunt nulla ad magna mollit aliquip quis incididunt. Qui mollit culpa ad adipisicing laboris non dolore amet elit velit cupidatat et.
              Elit enim ullamco consectetur ea velit veniam aute. Incididunt proident ipsum ut elit ad qui adipisicing id proident laboris irure magna.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 15 }} id='contacts_anchor'>
          <Subtitle>
            Контакты
          </Subtitle>
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'], gap: 5, px: 4 }}>
            <Box>
              <Typography variant="h4" fontWeight='bold' sx={{ my: 1 }}>
                Производственный отдел
              </Typography>
              <Typography variant="h6">
                <b>Телефон:</b> 8(989)801-23-91
              </Typography>
              <Typography variant="h6">
                <b>Адрес:</b> Школьная ул., 9, рабочий посёлок Первомайский
              </Typography>

              <Typography variant="h4" fontWeight='bold' sx={{ mt: 4, mb: 1 }}>
                Офис
              </Typography>
              <Typography variant="h6">
                <b>Телефон:</b> 8(989)801-23-91
              </Typography>
              <Typography variant="h6">
                <b>Адрес:</b> Северное ш. 10, Раменское
              </Typography>
            </Box>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A711ea37dc3a1461d53cb66acc3637e91b23c8492ed19997ddb60495aa5a2ae09&amp;source=constructor"
              frameborder="0"
              style={{ width: '100%', minHeight: '400px', boxShadow: '0px 5px 20px 1px rgba(34, 60, 80, 0.2)' }}
            />
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}
