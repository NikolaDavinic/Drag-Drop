import { useState } from "react"
import { columnsFromBackend } from "../../data/InitialData"
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import TaskCard from "../TaskCard/TaskCard";
import { Box } from "@mui/material";
import styles from './Jira.module.css'
import { ColumnsType, DataType } from "../../types/types";

const Kanban = () => {
    const [cols, setColumns] = useState<Array<ColumnsType>>(columnsFromBackend)

    const handleDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            setColumns((columns) => {
                const copiedColumns = [...columns];

                const sourceColumnIndex = copiedColumns.findIndex((item) => item.id === source.droppableId);
                const destionationColumnIndex = copiedColumns.findIndex((item) => item.id === destination.droppableId);

                const elementIndexForChange = copiedColumns[sourceColumnIndex].items.findIndex((el: DataType) => el.id == result.draggableId);
                const elementForChange = copiedColumns[sourceColumnIndex].items.find((el: DataType) => el.id == result.draggableId);

                if (sourceColumnIndex != -1 && destionationColumnIndex != -1 && elementForChange != null && result != null && result.destination != null) {
                    copiedColumns[sourceColumnIndex].items.splice(elementIndexForChange, 1);
                    copiedColumns[destionationColumnIndex].items.splice(result.destination.index, 0, { id: elementForChange.id, Task: elementForChange?.Task, Due_Date: elementForChange?.Due_Date });
                }
                return copiedColumns;
            })
        } else {
            setColumns((columns) => {
                const copiedColumns = [...columns];
                const columnIndex = copiedColumns.findIndex((item) => item.id === source.droppableId);
                const elementIndexForChange = copiedColumns[columnIndex].items.findIndex((el: DataType) => el.id == result.draggableId);

                if (columnIndex != -1) {
                    const [ordered] = copiedColumns[columnIndex].items.splice(elementIndexForChange, 1);
                    copiedColumns[columnIndex].items.splice(destination.index, 0, ordered);
                }
                return copiedColumns;
            })
        }
        console.log('Column 1: ')
        console.table(cols[0].items)
        console.log('Column 2: ')
        console.table(cols[1].items)
        console.log('Column 3: ')
        console.table(cols[2].items)
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Box sx={{
                display: "flex",
            }}>
                <Box
                    sx={{
                        margin: "8px",
                        display: "flex",
                        width: "100%",
                        minHeight: "80vh",
                    }}
                >
                    {cols.map((el) => {
                        return (
                            <Droppable key={el.id} droppableId={el.id} >
                                {(provided) => (
                                    <Box
                                        sx={{
                                            minHeight: "100px",
                                            display: "flex",
                                            flexDirection: "column",
                                            background: "#f3f3f3",
                                            minWidth: "341px",
                                            borderRadius: "5px",
                                            padding: "15px 15px",
                                            marginRight: "45px",
                                        }}
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        <span className={styles.kanbanSpan}>{el.title}</span>
                                        {el.items.map((item: DataType, index: number) => (
                                            <TaskCard key={item.id} item={item} index={index} />
                                        ))}
                                        {provided.placeholder}
                                    </Box>
                                )
                                }
                            </Droppable>
                        )
                    })}
                </Box>
            </Box>
        </DragDropContext >
    )
}

export default Kanban