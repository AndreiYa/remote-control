import {WebSocket} from "ws";
import {getMousePos, screen} from "robotjs";
import Jimp from "jimp";

export function prnt(ws: WebSocket): void {
    const pos = getMousePos();

    const screenPos: number[] = [
        pos.x - 100,
        pos.y - 100,
        pos.x + 100,
        pos.y + 100,
    ];

    const bmp = screen.capture(...screenPos);

    const image = new Jimp({
        data: bmp.image,
        width: bmp.width,
        height: bmp.height,
    });

    image.getBase64(Jimp.MIME_PNG, (err: Error | null, data: string) => {
        ws.send(`prnt_scrn ${data.split(';base64,')[1]}`);
    });
}