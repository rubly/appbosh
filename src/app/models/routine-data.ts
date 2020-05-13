export interface RoutineData {
    routineId: string;
    routineName: string;
    workTime: number;
    restTime: number;
    numberRounds: number;
}

export function emptyRoutineData(): RoutineData {
    return {
        routineId: '',
        routineName: '',
        workTime: 0,
        restTime: 0,
        numberRounds: 0,
    };
}

export function emptyArrayRoutineData(): RoutineData[] {
    return [{
        routineId: '',
        routineName: '',
        workTime: 0,
        restTime: 0,
        numberRounds: 0,
    }];
}
