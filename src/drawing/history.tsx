import {PathWithColorAndWidth} from '../canvas-with-interactivity-and-customizability'
//https://github.com/ammarahm-ed/drawing-board/blob/main/src/drawing/history.tsx
const history: {
    undo: PathWithColorAndWidth[];
    redo: PathWithColorAndWidth[];
  } = {
    undo: [],
    redo: []
  };
  
  function clear() {
    history.undo = [];
    history.redo = [];
  }
  
  //When users stops drawing. The newly created path is added to history with history.push function.
  function push(path: PathWithColorAndWidth){
    history.undo.push(path);
  }

  function undo() {
    if (history.undo.length === 0) return;
    let lastPath = history.undo[history.undo.length -1];
    history.redo.push(lastPath);
    history.undo.splice(history.undo.length -1, 1);
    
  }