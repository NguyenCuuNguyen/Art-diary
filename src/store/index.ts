import { DrawingInfo, Paint, Path } from '@shopify/react-native-skia';

interface DrawingStore extends State {
    //Array of completed paths to redraw on Canvas
    completedPaths: CurrentPath[]; 
    //Function to update completedPaths
    setCompletedPaths: (completedPaths: CurrentPath[]) => void; 
    //current stroke - Skia's paint object
    stroke: Paint;

}