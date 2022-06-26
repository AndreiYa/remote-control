export interface IOperation {
  operation: string;
  callback(...args: any): void;
}