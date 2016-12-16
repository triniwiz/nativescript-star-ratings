import { Observable } from 'data/observable';
import { Color } from 'color';
import { Purple } from 'color/known-colors';

export class HelloWorldModel extends Observable {

    constructor() {
        super();
    }

    get starColor(): any {
        return new Color(Purple);
    }

//   didChangeValue(args: any) {
//       console.log('didChangeValue', args);
//   }
}
