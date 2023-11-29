import { Draggable } from 'react-beautiful-dnd';
import { Box } from '@mui/material';
import styles from './TaskCard.module.css'
import { TaskCarProps } from '../../types/types';

const TaskCard = ({ item, index }: TaskCarProps) => {
    return (
        <Draggable key={item.id} draggableId={item.id} index={index} >
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            padding: "0 15px",
                            minHeight: "106px",
                            borderRadius: "5px",
                            maxWidth: "311px",
                            background: "white",
                            marginTop: "15px",
                        }}
                    >
                        <p>{item.Task}</p>
                        <div className={styles.draggableDiv}>
                            <p>
                                <span>
                                    {new Date(item.Due_Date).toLocaleDateString('en-us', {
                                        month: 'short',
                                        day: '2-digit'
                                    })}
                                </span>
                            </p>
                        </div>
                    </Box>
                </div >
            )}
        </Draggable >
    )
}

export default TaskCard