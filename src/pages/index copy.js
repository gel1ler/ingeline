import { Box, Container, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import Layout from '../components/Layout/Layout'
import Start from "@/components/Start"
import Subtitle from "@/components/UI/Subtitle"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from "next/image"
import about_image from '../../public/about (2).jpeg'

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [height, setHeight] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(Math.round(position / 10) * 10)
  };

  useEffect(() => {
    AOS.init({ once: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    setHeight(window.innerHeight)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Layout scroll={scrollPosition} height={height}>
      <Start scroll={scrollPosition} height={height} />
      <Box sx={{ width: '100%', background: 'white', zIndex: 1, position: 'relative' }}>
        <Container sx={{ background: 'white', position: 'relative', pt: 7 }}>
          <Box id='about_anchor'>
            <Subtitle>
              О компании
            </Subtitle>
            <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'], gap: 3 }} data-aos='fade-right'>
              <Box sx={{ width: '100%', height: '100%', position: 'relative', height: ['60vh', '80vh'], minHeight: ['400px', '600px'] }}>
                <Image
                  src={about_image.src}
                  fill
                  alt='О компании'
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 1200px) 100vw"
                />
              </Box>
              <Typography variant="h6" textAlign='center' >
                Elit enim ullamco consectetur ea velit veniam aute. Incididunt proident ipsum ut elit ad qui adipisicing id proident laboris irure magna.
                Ullamco esse ad sunt nulla ad magna mollit aliquip quis incididunt. Qui mollit culpa ad adipisicing laboris non dolore amet elit velit cupidatat et.
                Elit enim ullamco consectetur ea velit veniam aute. Incididunt proident ipsum ut elit ad qui adipisicing id proident laboris irure magna.
                Ullamco esse ad sunt nulla ad magna mollit aliquip quis incididunt. Qui mollit culpa ad adipisicing laboris non dolore amet elit velit cupidatat et.
                Elit enim ullamco consectetur ea velit veniam aute. Incididunt proident ipsum ut elit ad qui adipisicing id proident laboris irure magna.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 10 }} id='contacts_anchor' data-aos='fade-right'>
            <Subtitle>
              Контакты
            </Subtitle>
            <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'], gap: 5, px: [0, 4], minHeight: '70vh' }}>
              <Box sx={{ textAlign: ['center', 'center', 'left'] }}>
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
                data-aos='fade-right'
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A711ea37dc3a1461d53cb66acc3637e91b23c8492ed19997ddb60495aa5a2ae09&amp;source=constructor"
                frameBorder="0"
                style={{ width: '100%', height: '100%', boxShadow: '0px 5px 20px 1px rgba(34, 60, 80, 0.2)' }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}
