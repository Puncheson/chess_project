import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell {
    readonly x:number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
}