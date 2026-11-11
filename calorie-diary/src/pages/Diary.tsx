import React, { useState} from "react";
import { demoMeals } from "../data/demoData";
import type { Meal } from "../data/demoData";
import { Flex, Space, Table, Tag, Popconfirm, Button } from 'antd';
import type { TableProps } from 'antd';

const [meals, setMeals] = useState(demoMeals);

const handleDelete = (id: number) => {
    setMeals(meals.filter((meal) => meal.id !== id));
};

const columns: TableProps<Meal>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Calories',
        dataIndex: 'calories',
        key: 'calories',
    },
    {
        title: 'Protein',
        dataIndex: 'protein',
        key: 'protein',
    },
    {
        title: 'Fat',
        dataIndex: 'fat',
        key: 'fat',
    },
    {
        title: 'Carbs',
        dataIndex: 'carbs',
        key: 'carbs',
    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Действия',
        render: (_, meal) => (
            <Popconfirm title="Удалить приём?" onConfirm={() => handleDelete(meal.id)}>
                <Button danger size="small">Удалить</Button>
            </Popconfirm>
        ),
    }
];

const App: React.FC = () => (
    <Table<Meal> columns={columns} dataSource={meals} />
);

export default App;