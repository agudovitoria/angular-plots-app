import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GraphService {

    constructor() {
    }

    // f(x) = x^2 + 6x + 5
    graph01(x: number): number {
        return Math.pow(x, 2) - (6 * x) + 5;
    }

    // f(x) = x^2 - 4
    graph02(x: number): number {
        return Math.pow(x, 2) - 4;
    }

    // f(x) = -x^2
    graph03(x: number): number {
        return -Math.pow(x, 2);
    }
}
