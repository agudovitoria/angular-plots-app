import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

type GraphFunction = (x: number) => number;

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private data: (length: number) => Array<number> = (length: number) => {
        const sequence = Array.from(Array(length / 2).keys());
        sequence.shift();

        return [...sequence.slice().reverse().map(x => -x), 0, ...sequence];
    }

    getLabels(length: number): Array<number> {
        return this.data(length);
    }

    getSyncArithmeticData(length: number, offset: number = 0, fx: GraphFunction): Array<number> {
        return this.data(length).map((x: number) => fx(x) + offset);
    }

    getSyncGeometricData(length: number, offset: number = 0, fx: GraphFunction): Array<number> {
        return this.data(length).map((x: number) => fx(x) * offset);
    }

    getSyncData(length: number, offset: number = 0, fx: GraphFunction): Array<number> {
        return this.data(length + offset);
    }

    getAsyncData(length: number, offset: number = 0, fx: GraphFunction): Observable<Array<number>> {
        return of(this.data(length + offset));
    }
}
