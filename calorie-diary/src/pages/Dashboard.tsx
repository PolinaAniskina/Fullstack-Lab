import React, { useState } from 'react';
import { Flex, Progress, Col, Row, Statistic, Layout, Card, Typography } from 'antd';
import { demoMeals, dailyGoal } from '../data/demoData';
import Title from 'antd/es/typography/Title';
import MealCard from '../components/MealCard';

const totalCalories = demoMeals.reduce((sum, meal) => sum + meal.calories, 0);

const totalProtein = demoMeals.reduce((sum, meal) => sum + meal.protein, 0);
const totalFat = demoMeals.reduce((sum, meal) => sum + meal.fat, 0);
const totalCarbs = demoMeals.reduce((sum, meal) => sum + meal.carbs, 0);

const percent = Math.round((totalCalories / dailyGoal) * 100);
const caloriesRemain = dailyGoal - totalCalories;

const App: React.FC = () => (
    <Layout>
        <Flex gap="small" wrap>
            <Progress type="circle" percent={percent} format={() => `${totalCalories} / ${dailyGoal} ккал`} />
        </Flex>

        <Row gutter={16}>
            <Col span={12}>
                <Statistic title="Белки" value={`${totalProtein}`} suffix="г" />
            </Col>
            <Col span={12}>
                <Statistic title="Жиры" value={`${totalFat}`} suffix="г" />
            </Col>
            <Col span={12}>
                <Statistic title="Углеводы" value={`${totalCarbs}`} suffix="г" />
            </Col>
        </Row>
        <Flex>
            <Row>
                <Col>
                    <Statistic title="Осталось"  value={`${caloriesRemain}`} suffix="ккал" />
                </Col>
            </Row>
        </Flex>
        <Col span={16}>
            <Title level={3}>Приёмы пищи сегодня</Title>
            {demoMeals.map((meal) => (
                <MealCard
                    key={meal.id}
                    name={meal.name}
                    time={meal.time}
                    calories={meal.calories}
                />
            ))}
        </Col>
    </Layout>
    
);

export default App;