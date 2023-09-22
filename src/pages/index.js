import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material"
import React, { useEffect, useState } from "react"
import Layout from '../components/Layout/Layout'
import Start from "@/components/pages/index/Start"
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from '@/components/pages/index/about/about'
import Products from "@/components/pages/index/products/big/products"
import Contacts from "@/components/pages/index/Contacts"
import Plx from "react-plx";
import { startParallax } from "../parallaxCfg"
import { getProducts } from '@/../firebase/clientApp'
import Head from "next/head"
import StartSmall from "@/components/pages/index/Start-small"
import Form from "@/components/UI/Order/Form"
import SmallProducts from "@/components/pages/index/products/small/productsSmall"

export async function getServerSideProps() {
  const products = await getProducts()
  return {
    props: { products }
  }
}

export default function Home({ products }) {
  const [height, setHeight] = useState()
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    AOS.init()
    setHeight(window.innerHeight)
  }, [])

  return (
    <>
      <Head>
        <title>ООО Инжелайн - производственное предприятие</title>
        <meta name='description' content='Производственная компания по металлообработке, изготовлению труб большого диаметра из обечаек, емкостей, отводов.' />
      </Head>
      <Layout height={height}>
        <Plx parallaxData={startParallax(height)}>
          {isSm ?
            <StartSmall />
            :
            <Start />
          }
        </Plx>
        <About height={height} />
        {isSm ?
          <SmallProducts products={products} />
          :
          <Products products={products} />
        }
        <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw' }} maxWidth={false}>
          <Contacts />
        </Container>
      </Layout >
    </>
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
