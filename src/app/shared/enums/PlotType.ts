export type PlotFunction = (x: number) => number;

export enum PlotType {
    GRAPH_01,
    GRAPH_02,
    GRAPH_03,
    GRAPH_04
}

export function getPlotTypes(): PlotType[] {
    return [
        PlotType.GRAPH_01,
        PlotType.GRAPH_02,
        PlotType.GRAPH_03,
        PlotType.GRAPH_04
    ];
}

export function getDescriptionFor(plotType: PlotType): string {
    switch (plotType) {
        case PlotType.GRAPH_01: {
            return 'f(x) = cos(x)';
        }

        case PlotType.GRAPH_02: {
            return 'f(x) = sin(x)';
        }

        case PlotType.GRAPH_03: {
            return 'f(x) = x^2';
        }

        case PlotType.GRAPH_04: {
            return 'f(x) = -x^2';
        }

        default:
            return 'f(x) = 0';
    }
}

export function getPlotFor(plotType: PlotType): PlotFunction {
    switch (plotType) {
        // f(x) = cos(x)
        case PlotType.GRAPH_01: {
            return (x: number): number => Math.cos(x);
        }

        // f(x) = sin(x)
        case PlotType.GRAPH_02: {
            return (x: number): number => Math.sin(x);
        }

        // f(x) = x^2
        case PlotType.GRAPH_03: {
            return (x: number): number => Math.pow(x, 2);
        }

        // f(x) = -x^2
        case PlotType.GRAPH_04: {
            return (x: number): number => -Math.pow(x, 2);
        }

        default:
            return () => 0;
    }
}
