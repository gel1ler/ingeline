import React, { useState } from 'react'
import { Box, Typography, Divider } from '@mui/material'
import Image from "next/image"
import Subtitle from '../../UI/Subtitle'
import general_image from '../../../../public/general.jpg'
import Advantage from './advantage'
import Page from './page'
import Slider from './slider'

const advantages = [
    {
        title: 'Уникальное оборудование',
        href: 'equipment_anchor'
    },
    {
        title: 'Удобное логистическое расположение в центральной части России',
        href: 'placement_anchor'
    },
    {
        title: 'Высококвалифицированные и замотивированные кадры',
        href: 'employers_anchor'
    },
]

const About = ({ height }) => {
    return (
        <Box
            sx={{
                bgcolor: 'white',
                display: 'grid',
                gridTemplateColumns: '1.1fr 1fr'
            }}
        >
            <Box
                id='about_anchor'
                sx={{
                    height: '100vh',
                    position: 'sticky',
                    top: '0',
                    transition: 'all 0.2s ease-out',
                    bgcolor: 'white',
                    pt: 10,
                }}
            >
                <Subtitle>
                    О компании
                </Subtitle>
                <Box sx={{ mx: 'auto' }}>
                    <Typography variant='h6'>
                        Производтсвенная компания ООО "Инжелайн" использует мощности завода Первомайскхиммаш по договору аренды, заключённому до 2029 года.
                        Один из крупнейших металлургических заводов страны предоставляет целый ряд преимуществ.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
                        {advantages.map((i, key) =>
                            <Advantage key={key} num={key} height={height} text={i.title} href={i.href} />
                        )}
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: '100%', position: 'relative', }}>
                <Page title='Уникальное оборудование' id='equipment_anchor'>
                    {/* <Slider /> */}
                    <Typography variant='h6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere enim nulla, bibendum convallis sem facilisis a. Cras viverra risus et dolor convallis pharetra. Donec dignissim pharetra justo, sit amet sollicitudin tellus aliquet vel. Etiam pharetra interdum tortor, at accumsan erat lobortis eu. Nulla facilisi. Quisque lobortis nisi ut ex dignissim molestie. Morbi tempus ornare pharetra. Praesent eu lectus molestie, convallis quam vitae, blandit mi. Duis non mauris ligula. Mauris nec dolor vel augue aliquam faucibus. Maecenas pellentesque quam in ante condimentum condimentum. Ut interdum ornare urna et laoreet. Suspendisse a ligula in neque rutrum faucibus.
                    </Typography>
                </Page>
                <Page title='Расположение' id='placement_anchor'>
                    <Typography variant='h6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere enim nulla, bibendum convallis sem facilisis a. Cras viverra risus et dolor convallis pharetra. Donec dignissim pharetra justo, sit amet sollicitudin tellus aliquet vel. Etiam pharetra interdum tortor, at accumsan erat lobortis eu. Nulla facilisi. Quisque lobortis nisi ut ex dignissim molestie. Morbi tempus ornare pharetra. Praesent eu lectus molestie, convallis quam vitae, blandit mi. Duis non mauris ligula. Mauris nec dolor vel augue aliquam faucibus. Maecenas pellentesque quam in ante condimentum condimentum. Ut interdum ornare urna et laoreet. Suspendisse a ligula in neque rutrum faucibus.
                    </Typography>
                </Page>
                <Page title='Сотрудники' id='employers_anchor'>
                    <Typography variant='h6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere enim nulla, bibendum convallis sem facilisis a. Cras viverra risus et dolor convallis pharetra. Donec dignissim pharetra justo, sit amet sollicitudin tellus aliquet vel. Etiam pharetra interdum tortor, at accumsan erat lobortis eu. Nulla facilisi. Quisque lobortis nisi ut ex dignissim molestie. Morbi tempus ornare pharetra. Praesent eu lectus molestie, convallis quam vitae, blandit mi. Duis non mauris ligula. Mauris nec dolor vel augue aliquam faucibus. Maecenas pellentesque quam in ante condimentum condimentum. Ut interdum ornare urna et laoreet. Suspendisse a ligula in neque rutrum faucibus.
                    </Typography>
                </Page>
            </Box>
        </Box>
    )
}

export default About