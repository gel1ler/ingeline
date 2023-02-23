import { Box, Container, Typography } from "@mui/material"
import React from "react"
import Layout from '../components/Layout/Layout'
import Start from "@/components/Start"
import Subtitle from "@/components/UI/Subtitle"

export default function Home() {
  return (
    <Box>
      <Layout>
        <Start />
        <Container sx={{ mt: 7 }}>
          {/*___________________________________________________*/}
          <Subtitle>
            О компании
          </Subtitle>
          <Typography variant="h6" textAlign='center' >
            Elit enim ullamco consectetur ea velit veniam aute. Incididunt proident ipsum ut elit ad qui adipisicing id proident laboris irure magna.
            Ullamco esse ad sunt nulla ad magna mollit aliquip quis incididunt. Qui mollit culpa ad adipisicing laboris non dolore amet elit velit cupidatat et.
            Elit enim ullamco consectetur ea velit veniam aute. Incididunt proident ipsum ut elit ad qui adipisicing id proident laboris irure magna.
            Ullamco esse ad sunt nulla ad magna mollit aliquip quis incididunt. Qui mollit culpa ad adipisicing laboris non dolore amet elit velit cupidatat et.
            Elit enim ullamco consectetur ea velit veniam aute. Incididunt proident ipsum ut elit ad qui adipisicing id proident laboris irure magna.
          </Typography>
          {/*___________________________________________________*/}


        </Container>
      </Layout>
    </Box>
  )
}
