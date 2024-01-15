/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import {Box, Button, Card, CardActions, CardContent, FormControl, styled, TextField, withStyles} from "@mui/material";
import {ChangeEventHandler, EventHandler, FocusEventHandler, useEffect, useReducer, useRef, useState} from "react";
import useOutsideClick from "~/integrations/react/hooks/useOutsideClick";
import {noOp} from "~/utils/index.js.js";


const CardContentNoPadding = styled(CardContent)(`
  &:last-child {
    padding-bottom: 16px;
  }
`);

export const MUICard = qwikify$(Card);

type NoteProps = {
    isFocused: boolean,
    title?: string,
    note?: string,
    onTitleChange: ChangeEventHandler<HTMLInputElement>,
    onNoteChange: ChangeEventHandler<HTMLInputElement>
    onFocusText: () => void,
    onBlurText: () => void,
    onClose: EventHandler<any>
}

const NoteComponent = ({
                           isFocused,
                           title,
                           note,
                           onFocusText,
                           onNoteChange,
                           onTitleChange,
                           onClose,
                           onBlurText
}: NoteProps) => {
    const containerRef = useRef(null);
    useOutsideClick(containerRef, onBlurText)


    return <Box
        ref={containerRef}
        sx={{width: 475 }}
    >
        <Card
            sx={{ boxShadow: 3 }}
            variant="outlined"
        >
            <CardContentNoPadding>
                    {
                        isFocused &&
                        <TextField
                            InputProps={{ disableUnderline: true }}
                            sx={{width: '100%', marginBottom: 2 }}
                            value={title}
                            onChange={onTitleChange || noOp}
                            placeholder="Title"
                            variant="standard"
                        />
                    }

                    <TextField
                        variant="standard"
                        sx={{width: '100%'}}
                        placeholder="Take a note"
                        value={note}
                        onChange={onNoteChange || noOp }
                        onFocus={onFocusText}
                        InputProps={{ disableUnderline: true }}
                    />

                    {
                        isFocused && <CardActions sx={{ justifyContent: 'right', padding: 0 }}>
                            <Button color="inherit" aria-label="close" size="small" variant="text" onClick={onClose}>Close</Button>
                        </CardActions>
                    }
            </CardContentNoPadding>
        </Card>
    </Box>
}


export const AddNotes = qwikify$(NoteComponent, {eagerness: "hover"})

