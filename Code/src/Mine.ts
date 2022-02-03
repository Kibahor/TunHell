import { Stack } from './Stack'

export class Mine {
    public name:string;
    public stackList:Array<Stack> = [];

    public constructor(name:string) {
        this.name = name;
    }
}