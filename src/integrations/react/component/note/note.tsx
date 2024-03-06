/** @jsxImportSource react */
import {Card} from "@mui/material";
import CardContentNoPadding from "~/integrations/react/component/material-uil";
import {qwikify$} from "@builder.io/qwik-react";


type NoteComponentProps = {
    title: string,
    note: string,
    id: string,
    index: number
}

export const NoteComponentReact = ({ title, note} : NoteComponentProps) => {
    return (
        <Card sx={{ maxWidth: 238 }} variant="outlined">
            <CardContentNoPadding>
                <div>
                    { title }
                </div>
                <div>
                    { note }
                </div>
            </CardContentNoPadding>
        </Card>
    );
}


export const NoteComponent = qwikify$(NoteComponentReact, { eagerness: 'hover'})