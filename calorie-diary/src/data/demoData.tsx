export interface Meal {
    id: number;
    name: string;       // "Завтрак", "Обед"
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    time: string;       // "08:30"
}

export const demoMeals: Meal[] = [
    { id: 1, name: 'Завтрак', calories: 450, protein: 20, fat: 15, carbs: 60, time: '08:30' },
    { id: 2, name: 'Обед', calories: 700, protein: 35, fat: 25, carbs: 80, time: '13:00' },
    { id: 3, name: 'Перекус', calories: 200, protein: 8, fat: 10, carbs: 25, time: '16:00' },
];

export const dailyGoal = 2200; // цель по калориям
