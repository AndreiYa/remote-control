import {WebSocket} from "ws";
import {IOperation} from "./operation.interface";

export function operations(ws: WebSocket, message: string, operations: IOperation[]) {
  const msg = message.split(' ');
  const operation = msg.shift();
    if (!operation) {
      return;
    }
  operations.find((cmd: IOperation) => operation === cmd.operation)?.callback(...(msg), ws);
}