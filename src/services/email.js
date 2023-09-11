import React from 'react'
import { useSnackbar } from 'notistack'
import CenteredTP from '../components/UI/CenteredTP'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

const Email = ({ linear }) => {
    const { enqueueSnackbar } = useSnackbar()

    const copyLink = (text, msg) => {
        navigator.clipboard.writeText(text)
        enqueueSnackbar(msg)
    }

    return (
        linear ?
            <span className='cp' onClick={() => copyLink('info@engeline.com', 'Почта скопирована')} >
                info@engeline.com
            </span>
            :
            <CenteredTP centered underlined click={() => copyLink('info@engeline.com', 'Почта скопирована')}>
                <EmailOutlinedIcon fontSize='small' />
                info@engeline.com
            </CenteredTP>
    )
}

export default Email