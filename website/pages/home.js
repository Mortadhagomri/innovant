import MainLayout from '../layout/mainLayout';
import Form from '../components/form';


const Home = () => {
    return (
        <MainLayout>
            <Form action="/home" />
        </MainLayout>
    );
}

export default Home;