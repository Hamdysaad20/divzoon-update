import Head from 'next/head'

function title(props) {
    return (
        <div>
 <div>
            
        <Head>
        <title>{props.tit}</title>

          <link rel="shortcut icon" href="/divicobg.ico" />
     </Head>      
    </div>
        </div>
    )
}

export default title
