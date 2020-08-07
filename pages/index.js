import Link from 'next/link';
import Layout from '../components/Layout';

const Index = ()=>(
    <Layout title="Home">
        <Link href="/about">
            <a>AboutPage</a>
        </Link>
        <p>Welcome to the Page</p>
    </Layout>
)
export default Index;