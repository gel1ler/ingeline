import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import CenteredTP from '../components/UI/CenteredTP'

const number = '+7(495)374-53-43'

const Phone = ({ linear }) => {
    const { enqueueSnackbar } = useSnackbar()
    const router = useRouter()

    const copyLink = (text, msg) => {
        navigator.clipboard.writeText(text)
        enqueueSnackbar(msg)
    }

    const phoneClick = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            router.push(`tel:${number}`)
        }
        else {
            copyLink(number, 'Номер телефона скопирован')
        }
    }

    return (
        linear ?
            <span className="cp" onClick={phoneClick}>{ number }</span>
            :
            <CenteredTP centered underlined weight='800' click={phoneClick}>
                <PhoneIcon fontSize='small' />
                {number}
            </CenteredTP>

    )
}

export default Phone