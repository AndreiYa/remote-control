import {mouseDown, mouseLeft, mousePosition, mouseRight, mouseUp} from "./src/ws_server/operations/navigation";
import {getCircle, getRectangle, getSquare} from "./src/ws_server/operations/draw";
import {prnt} from "./src/ws_server/operations/prn";
import { RawData, WebSocket, WebSocketServer } from 'ws';
import { httpServer } from './src/http_server';
import { operations } from "./src/ws_server/helpers";

const HTTP_PORT = 3000;
const WSPORT = 8080;

const wss = new WebSocketServer({ port: WSPORT });

wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (message: RawData) => {
    operations(ws, message.toString(), [
      {
        operation: 'mouse_left',
        callback: mouseLeft
      },
      {
        operation: 'mouse_right',
        callback: mouseRight
      },
      {
        operation: 'mouse_up',
        callback: mouseUp
      },
      {
        operation: 'mouse_down',
        callback: mouseDown
      },
      {
        operation: 'mouse_position',
        callback: mousePosition
      },
      {
        operation: 'draw_circle',
        callback: getCircle
      },
      {
        operation: 'draw_rectangle',
        callback: getRectangle
      },
      {
        operation: 'draw_square',
        callback: getSquare
      },
      {
        operation: 'prnt_scrn',
        callback: prnt
      }]);
  });
});

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
