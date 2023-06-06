import { Box, Container, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import Layout from '../components/Layout/Layout'
import Start from "@/components/Start"
import Subtitle from "@/components/UI/Subtitle"
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from '@/components/pages/index/about'
import Contacts from "@/components/pages/index/contacts"
import Footer from "@/components/Layout/Footer"
import Plx from "react-plx";
import { ParallaxLayer, Parallax } from "@react-spring/parallax"
import { startParallax, aboutParallax, contactParallax } from "./parallaxCfg"


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

  return (
    <Layout scroll={scrollPosition} height={height}>
      <Plx parallaxData={startParallax(height)}>
        <Start scroll={scrollPosition} height={height} />
      </Plx>
      <About scroll={scrollPosition} height={height} />
      <Plx parallaxData={contactParallax(height)}>
        <Contacts />
      </Plx>
      <Footer />

    </Layout >
  )















  // return (
  //   // <Layout scroll={scrollPosition} height={height}>
  //   <Parallax pages={7}>
  //     <ParallaxLayer offset={0} speed={0.5}>
  //       <Start scroll={scrollPosition} height={height} />
  //     </ParallaxLayer>
  //     <ParallaxLayer offset={1} sticky={{ start: 1, end: 3 }} style={{ zIndex: '1' }}>
  //       <About />
  //     </ParallaxLayer>
  //     <ParallaxLayer offset={1} speed={1} style={{ zIndex: '2' }}>
  //       <Page color='red' />
  //     </ParallaxLayer>
  //     <ParallaxLayer offset={2} speed={1} style={{ zIndex: '2' }}>
  //       <Page color='green' r />
  //     </ParallaxLayer>
  //     <ParallaxLayer offset={3} speed={1} style={{ zIndex: '2' }}>
  //       <Page color='blue' />
  //     </ParallaxLayer>
  //     <ParallaxLayer offset={4}>
  //       <Contacts />
  //     </ParallaxLayer>
  //     <ParallaxLayer offset={5}>
  //       <Footer />
  //     </ParallaxLayer>
  //   </Parallax >
  //   // </Layout >
  // )
}
