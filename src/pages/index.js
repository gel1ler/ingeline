import { Box, Container, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import Layout from '../components/Layout/Layout'
import Start from "@/components/Start"
import Subtitle from "@/components/UI/Subtitle"
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from '../components/pages/indexAbout'
import Footer from "@/components/Layout/Footer"
import { ParallaxLayer, Parallax } from "@react-spring/parallax"

const Page = ({ color, r }) => {
  return (
    <Box
      sx={{
        width: '50%',
        height: '100vh',
        bgcolor: color,
        ml: 'auto',
      }}
    />
  )
}

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [height, setHeight] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  };

  useEffect(() => {
    AOS.init({ once: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    setHeight(window.innerHeight)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  console.log(scrollPosition)

  return (
    // <Layout scroll={scrollPosition} height={height}>
    <Parallax pages={7}>
      <ParallaxLayer offset={0} speed={0.5}>
        <Start scroll={scrollPosition} height={height} />
      </ParallaxLayer>
      <ParallaxLayer offset={1} sticky={{ start: 1, end: 3 }} style={{zIndex: '1'}}>
        <About />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1} style={{zIndex: '2'}}>
        <Page color='red' />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1} style={{zIndex: '2'}}>
        <Page color='green' r />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={1} style={{zIndex: '2'}}>
        <Page color='blue' />
      </ParallaxLayer>
      <ParallaxLayer offset={4}>
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
      </ParallaxLayer>
      <ParallaxLayer offset={5}>
        <Footer />
      </ParallaxLayer>
    </Parallax >
    // </Layout >
  )
}
