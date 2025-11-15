import {Point} from "./lineTo";

export interface ArcTo {
    center: Point
    radius: number,
    startAngle: number,
    endAngle: number,
    startPosition: Point
    endPosition: Point
}