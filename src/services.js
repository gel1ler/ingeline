import { useSnackbar } from "notistack"
import React from "react"

export const CopyLink = (text, msg) => {
    const { enqueueSnackbar } = useSnackbar()
    navigator.clipboard.writeText(text)
    enqueueSnackbar(msg)
    return(
        <></>
    )
}