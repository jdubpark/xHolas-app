import { ListItem } from '@mui/material';
import React, { Component, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ReactDOM from 'react-dom';
import Block from './Block';


const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
  
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",
  
    // styles we need to apply on draggables
    ...draggableStyle
  });

export default function NewList({ blocks, removeBlock }) {
    console.log('blocks: ', blocks); 
    const [toPrint, setToPrint] = useState("hello");

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }

    function onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
          return;
        }
    
        const items = reorder(
          this.state.items,
          result.source.index,
          result.destination.index
        );
    
        this.setState({
          items
        });
      }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppableee">
                {(provided, snapshot) => (
                    <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    >
                        {
                            blocks.map((block, idx) => {
                                
                                console.log('block.id', block.id); 
                                return (
                                    <Draggable key={idx} draggableId={block.id} index={idx}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                  )}
                                            >
                                                {idx}
                                                <Block key={idx} defaultName={block.defaultName} defaultChain={block.defaultChain} index={idx} removeBlock={removeBlock}></Block>
                                            </div>
                                        )}
                                    
                                    </Draggable>
                                )
                            })
                        }

                    </div>
                )}
            </Droppable>
        </DragDropContext>

    )
}
