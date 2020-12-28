import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// f(x) = x^2 + 6x + 5
const graph01 = (x: number): number => {
    return Math.pow(x, 2) - (6 * x) + 5;
};

// f(x) = -x^4 + 2x^2
const graph02 = (x: number): number => {
    return Math.pow(-x, 4) + 2 * Math.pow(x, 2);
};

// f(x) = -x^2
const graph03 = (x: number): number => {
    return -Math.pow(x, 2);
};

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

    getSyncArithmeticData(length: number, offset: number = 0): Array<number> {
        return this.data(length).map(x => graph03(x) + offset);
    }

    getSyncGeometricData(length: number, offset: number = 0): Array<number> {
        return this.data(length).map((x: number) => graph03(x) * offset);
    }

    getSyncSinData(length: number, offset: number = 0): Array<number> {
        return this.data(length).map(x => Math.sin(x + offset));
    }

    getSyncData(length: number, offset: number = 0): Array<number> {
        return this.data(length + offset);
    }

    getAsyncData(length: number, offset: number = 0): Observable<Array<number>> {
        return of(this.data(length + offset));
    }
}
