export interface RoutineData {
    routineId: string;
    routineName: string;
    workTime: number;
    restTime: number;
}

export function emptyRoutineData(): RoutineData {
    return {
        routineId: '',
        routineName: '',
        workTime: 0,
        restTime: 0,
    };
}

export function emptyArrayRoutineData(): RoutineData[] {
    return [{
        routineId: '',
        routineName: '',
        workTime: 0,
        restTime: 0,
    }];
}
