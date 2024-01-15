import { $, component$, useSignal, useStyles$ } from "@builder.io/qwik";
import { AddNotes } from "~/integrations/react/component/add-notes";
import styles from "./index.css?inline"
import { ChangeEvent } from "react";

type Note = {
    notes: string,
    title: string
}

export default component$(() => {
    useStyles$(styles)

    const notes = useSignal<Note[]>([
        {
            title: "test",
            notes: "lorem ipsum,"
        }
    ])

    const isFocused = useSignal(false)

    const title = useSignal<string>('')
    const note = useSignal<string>('')

    const onClose = $( () => {
        console.log('qwik close')

        // reset note component states
        isFocused.value = false;
        title.value = '';
        note.value = '';
    })

    const onNoteChanged = $( (text: ChangeEvent<HTMLInputElement>) => {
        console.log('qwik note text edit: ', text.currentTarget.value)
        note.value = text.currentTarget.value
    })

    const onTitleChange = $( (text: ChangeEvent<HTMLInputElement>) => {
        console.log('qwik title text edit', text.currentTarget.value)
        title.value = text.currentTarget.value;
    })

    const onNoteBlur = $(() => {
        console.log('qwik blur')

        if (note.value || title.value) {
            // TODO save create note; set title and note
            const newNote : Note = {
                notes: note.value,
                title: title.value
            }

            notes.value = ([...notes.value, newNote ]);
        }

        onClose()
    })

    const onNoteFocus = $(() => {
        console.log('qwik focus')
        isFocused.value = true
    })

    return <>
        <div class="wrapper">
            <div class="note-input-wrapper">
                <AddNotes
                    isFocused={isFocused.value}
                    title={title.value}
                    note={note.value}
                    onClose$={onClose}
                    onNoteChange$={onNoteChanged}
                    onTitleChange$={onTitleChange}
                    onFocusText$={onNoteFocus}
                    onBlurText$={onNoteBlur}
                />
            </div>

            <div class="notes-list">

            </div>
        </div>
    </>
})
