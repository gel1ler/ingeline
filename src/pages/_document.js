import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name='description' content='Производственная компания по металлообработке, изготовлению труб большого диаметра из обечаек, емкостей, отводов.' />
        <link rel="icon" href='/logo/logo.ico' />
        <meta name="yandex-verification" content="f3f036ae64cdb526" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
