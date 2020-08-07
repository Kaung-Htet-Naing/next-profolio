import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({title , slug}) => (
    <li>
        <Link as={`/${slug}`} href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout title="My Blog">
        <ul>
            <PostLink slug='myanmar-post' title='Myanmar' />
            <PostLink slug='burma-post' title='Burma' />
            <PostLink slug='myanmar-post' title='Myanmar' />
        </ul>
    </Layout>
)