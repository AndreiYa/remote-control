import { getMousePos, dragMouse, mouseToggle, setMouseDelay } from "robotjs";

export function getCircle(sizeIn: string): void {
    const size = +sizeIn;

    setMouseDelay(2);
    const pos = getMousePos();
    mouseToggle('down');

    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        const x = pos.x + (size * Math.cos(i));
        const y = pos.y + (size * Math.sin(i));
        dragMouse(x, y);
    }
    mouseToggle('up');
}

export function getRectangle(xPosition: string, yPosition: string): void {
    const x = +xPosition;
    const y = +yPosition;

    setMouseDelay(2);
    const p = (x + y) * 2;
    const pos = getMousePos();

    mouseToggle('down');
    let xP = pos.x;
    let yP= pos.y;
    const duration = 0.005 * p;

    for (let i = 0; i <= p * 4; i += duration) {
        const positions = [
            x,
            x+y,
            2*x+y,
            p,
        ];
        const position = positions.findIndex(part => i <= part) + 1;
        xP += position === 1 ?
          duration : position === 3 ?
            -duration : 0;
        yP += position === 2 ?
          duration : position === 4 ?
            -duration : 0;
        dragMouse(xP, yP);
    }
    mouseToggle('up');
}

export function getSquare(sizeIn: string): void {
    const length = +sizeIn;
    setMouseDelay(2);
    const pos = getMousePos();
    mouseToggle('down');
    let xPosition = pos.x;
    let yPosition = pos.y;
    const duration = 0.005 * length * 4;

    for (let i = 0; i <= length * 4; i += duration) {
        const position = Math.ceil(i / (length * 4) * 4);
        xPosition += position === 1 ?
          duration : position === 3 ?
            -duration : 0;
        yPosition += position === 2 ?
          duration : position === 4 ?
            -duration : 0;
        dragMouse(xPosition, yPosition);
    }
    mouseToggle('up');
}