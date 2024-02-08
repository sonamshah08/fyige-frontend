'use client'
import Image from "next/image";
import styles from "./page.module.css";
import CanvasPage from '../app/CanvasPage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function Home() {
  return (
    <main className={styles.main}>
       
      
       <DndProvider backend={HTML5Backend}>
      <div>
        <h1>My App</h1>
        <CanvasPage />
      </div>
    </DndProvider>

       {/* <div> */}
      {/* <CanvasPage /> Render the CanvasPage component */}
      {/* </div>   */}
 
    </main>
  );
}
