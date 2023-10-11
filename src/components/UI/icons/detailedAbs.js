import { Box, Typography } from '@mui/material'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const DetailedAbs = ({ href }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '5vh',
        mx: 'auto',
        left: 0,
        right: 0,
        textAlign: 'center',
        cursor: 'pointer',
        width: 'min-content',
        transition: 'all .3s ease',
        ':hover': {
          transform: 'translateY(10px)'
        }
      }}
    >
      <AnchorLink href={href} offset='50'>
        <Typography variant='h6' >
          Подробнее
        </Typography>
        <ExpandMoreIcon sx={{ fontSize: 30, mt: -1 }} />
      </AnchorLink>
    </Box>
  )
}

export default DetailedAbs