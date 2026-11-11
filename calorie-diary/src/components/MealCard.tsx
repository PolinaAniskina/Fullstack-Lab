import { Card } from 'antd';

interface MealCardProps {
    name: string;
    time: string;
    calories: number;
}

function MealCard({ name, time, calories }: MealCardProps) {
    return (
        <Card size="small" title={name}>
            <span>{time}</span>
            <span>{calories} ккал</span>
        </Card>
    );
}

export default MealCard;
