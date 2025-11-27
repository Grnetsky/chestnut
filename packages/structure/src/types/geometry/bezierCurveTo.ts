import {Point} from "./point";

export interface BezierCurveTo {
    startPoint: Point;
    cp1Point: Point
    cp2Point: Point
    endPoint: Point
}