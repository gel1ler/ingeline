import React from 'react'
import { Box, Divider, List, ListItem, Typography } from '@mui/material'
import { DiamIcon, RulerIcon, ThicknessIcon } from '../icons/productIcons'

const DescriprionList = ({ props, align }) => {

    return (
        <Box className='c-gap2'>
            {props.map((i, key) => {
                let icon

                switch (i.icon) {
                    case 'diameter':
                        icon = <DiamIcon />
                        break
                    case 'ruler':
                        icon = <RulerIcon />
                        break
                    case 'thickness':
                        icon = <ThicknessIcon />
                        break
                }

                let res

                if (i.text.includes(':')) {
                    const temp = i.text.split(':')
                    const title = temp[0] + ':'
                    const text = temp[1]
                    res = <span><b>{title}</b>{text}</span>
                }
                else {
                    res = i.text
                }
                return (
                    <>
                        <Box data-aos='fade-up' className='row-centered' sx={{ justifyContent: align, gap: 1 }}>
                            {icon}
                            <Typography
                                variant='h5'
                            >
                                {res}

                            </Typography>
                        </Box>
                        {key === props.length - 1 ? null : <Divider />}
                    </>
                )
            })}
        </Box>

    )
}

export default DescriprionList