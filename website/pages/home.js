import React from 'react'
import { GroupInput, Input } from '../components/input';
import MainLayout from '../layout/mainLayout';
const Home = () => {
    return (
        <MainLayout>
            <h1>halouma</h1>
            <Input />
            <GroupInput >
                <Input />
                <Input />
            </GroupInput>
        </MainLayout>
    );
}

export default Home;