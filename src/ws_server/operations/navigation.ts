import { moveMouse, getMousePos } from 'robotjs';
import { WebSocket } from "ws";

function moveMouseRobot(x: number, y: number): void {
    const pos = getMousePos();
    pos.x += +x;
    pos.y += +y;
    moveMouse(pos.x, pos.y);
}

export function mouseDown(y: string): void {
    moveMouseRobot(0, +y);
}

export function mouseLeft(x: string): void {
    moveMouseRobot(-x, 0);
}

export function mouseUp(y: string): void {
    moveMouseRobot(0, -y);
}

export function mouseRight(x: string): void {
    moveMouseRobot(+x, 0);
}

export function mousePosition(ws: WebSocket): void {
    const pos = getMousePos();
    ws.send(`mouse_position ${pos.x},${pos.y}`);
}