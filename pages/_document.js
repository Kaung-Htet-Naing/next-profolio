import Document , { Head , Main , NextScript } from 'next/document';

class MyDocument extends Document {
    render(){
        return(
            <html>
                <Head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}

export default MyDocument;