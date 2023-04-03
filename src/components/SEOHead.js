import Head from 'next/head'
function SEOHead ({ title, description, keywords }) {
  return (
    <Head>
      <title>{`${title} | AVIONETA`}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
      <meta name='keywords' content={keywords} />
    </Head>
  )
}

export default SEOHead
