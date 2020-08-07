import Layout from '../components/Layout';
import { withRouter} from 'next/router';
const post = ({ router }) => (
    <Layout title={router.query.title}>
        <p>
        Myanmar (English pronunciation below; Burmese: မြန်မာ, [mjəmà])[nb 1] or Burma (see §Etymology), officially the Republic of the Union of Myanmar[nb 2], is a country in Southeast Asia. 
        Myanmar is bordered by Bangladesh and India to its northwest, China to its northeast, Laos and Thailand to its east and southeast, and the Andaman Sea and the Bay of Bengal to its south and southwest. 
        With a size of 676,578 square kilometres (261,228 square miles), Myanmar is the largest of the Mainland Southeast Asian states by area.
        As of 2017, the population is about 54 million.[4] Its capital city is Naypyidaw, and its largest city is Yangon (Rangoon).
        [1] Myanmar has been a member of the Association of Southeast Asian Nations (ASEAN) since 1997.
        </p>
    </Layout>
)

export default withRouter(post);