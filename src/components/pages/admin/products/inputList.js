import { DiamIcon, RulerIcon, ThicknessIcon } from '@/components/UI/icons/productIcons'
import { Box, Button, Divider, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const InputList = ({ title, state, setState }) => {
    const addInput = () => {
        setState(prevList => [...prevList, [{ text: '', icon: ',' }]])
    }

    const textChangeHandler = (value, key) => {
        setState(state.map((i, index) => index === key ? { text: value, icon: i.icon } : i))
    }

    const iconChangeHandler = (value, key) => {
        setState(state.map((i, index) => index === key ? { text: i.text, icon: value } : i))
    }

    const deleteHandler = (key) => {
        setState(state.filter((i, index) => index !== key))
    }



    const iconsArr = [
        {
            icon: < DiamIcon />,
            type: 'diameter'
        },
        {
            icon: < RulerIcon />,
            type: 'ruler'
        },
        {
            icon: <ThicknessIcon />,
            type: 'thickness'
        },
    ]

    console.log(state)

    return (
        <Box className='c-gap2'>
            <Divider />
            <Typography>
                {title}
            </Typography>
            {state.map((i, key) =>
                <Box className='row-centered r-gap1' key={key}>
                    <Select
                        size='small'
                        label="-"
                        onChange={event => iconChangeHandler(event.target.value, key)}
                        value={i.icon}
                    >
                        {iconsArr.map((i, key) =>
                            <MenuItem value={i.type} key={key}>{i.icon}</MenuItem>
                        )}
                    </Select>
                    <TextField
                        color='secondary'
                        size='small'
                        value={i.text}
                        onChange={event => textChangeHandler(event.target.value, key)}
                        fullWidth
                        autoFocus
                        onKeyDown={e => e.key == 'Enter' ? addInput() : null}
                    />
                    <Button color='error' size='small' onClick={() => deleteHandler(key)}>
                        Удалить
                    </Button>
                </Box>
            )}
            <Button
                color='secondary'
                sx={{ width: 'min-content' }}
                onClick={addInput}
            >
                Добавить+
            </Button>
            <Divider />
        </Box>
    )
}

export default InputList