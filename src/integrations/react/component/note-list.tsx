/** @jsxImportSource react */
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import {useCallback} from "react";
import {Note} from "~/integrations/react/component/note/models";
import {qwikify$} from "@builder.io/qwik-react";
import {NoteComponentReact} from "~/integrations/react/component/note/note";
import styled from '@emotion/styled'

type NoteListProps = {
    listId: string
    notes: Note[],
    children?: React.ReactNode
}

const Container = styled.div``

export const NoteList = ({listId, notes}: NoteListProps) => {

    const onBeforeCapture = useCallback(() => {
        /*...*/
    }, []);
    const onBeforeDragStart = useCallback(() => {
        /*...*/
    }, []);
    const onDragStart = useCallback(() => {
        /*...*/
    }, []);
    const onDragUpdate = useCallback(() => {
        /*...*/
    }, []);
    const onDragEnd = useCallback(() => {
        // the only one that is required
    }, []);

    return (
        <DragDropContext
                onBeforeCapture={onBeforeCapture}
                onBeforeDragStart={onBeforeDragStart}
                onDragStart={onDragStart}
                onDragUpdate={onDragUpdate}
                onDragEnd={onDragEnd}
            >
            <Droppable droppableId={listId}>
                {(provided) => {
                    return <div {...provided.droppableProps} className="notes-list">

                        {
                            notes?.map((note, index) => (
                                <Draggable draggableId={note.id} index={index}>
                                    { (provided,) => {
                                        return <Container  {...provided.draggableProps}
                                                           {...provided.dragHandleProps}
                                                           ref={provided.innerRef}>
                                            <NoteComponentReact
                                                title={note.title}
                                                note={note.notes}
                                                id={note.id}
                                                index={index}/>

                                        </Container>
                                    }}
                                </Draggable>
                        ))}
                    </div>
                }}
            </Droppable>

        </DragDropContext>
    );
}

export const NoteListComponent = qwikify$(NoteList, { eagerness: "load"})
