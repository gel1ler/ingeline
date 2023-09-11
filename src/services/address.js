import React from 'react'
import { useSnackbar } from 'notistack'
import CenteredTP from '../components/UI/CenteredTP'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'

const Address = ({ linear, office }) => {
    const name = office ? 'Раменское, Северное ш. 10' : 'п. Первомайский, ул. Школьная 9'
    return (
        linear ?
            <a className="cp" target="_blank" href='https://yandex.ru/maps/?from=mapframe&ll=43.524819%2C54.993879&mode=usermaps&source=mapframe&um=constructor%3A711ea37dc3a1461d53cb66acc3637e91b23c8492ed19997ddb60495aa5a2ae09&utm_source=mapframe&z=5'>
                <span>{name}</span>
            </a>
            :
            <CenteredTP centered underlined link='https://yandex.ru/maps/?from=mapframe&ll=43.524819%2C54.993879&mode=usermaps&source=mapframe&um=constructor%3A711ea37dc3a1461d53cb66acc3637e91b23c8492ed19997ddb60495aa5a2ae09&utm_source=mapframe&z=5'>
                <PlaceOutlinedIcon fontSize="small" />
                {name}
            </CenteredTP>
    )
}

export default Address