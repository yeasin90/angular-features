import { Address } from "./address";

export class Student {
 constructor(
  public name: string,
  public email: string,
  public phone: number,
  public gender: string,
  public course: string,
  public sendUpdates: boolean,
  public bloodGroup: string,
  public address: Address
 ) { }
}   