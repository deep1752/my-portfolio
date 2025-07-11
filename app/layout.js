// ❌ No 'use client' here — this file must remain a Server Component

import '../public/css/style.css'; // Local CSS
import ScriptLoader from '@/components/ScriptLoader'; // New client-side component

export const metadata = {
  title: 'My Portfolio',
  description: 'A modern Portfolio website built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Resume Website Template Free Download</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Resume Website Template Free Download" name="keywords" />
        <meta content="Resume Website Template Free Download" name="description" />
        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon" />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* CSS Libraries */}
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link href="lib/slick/slick.css" rel="stylesheet" />
        <link href="lib/slick/slick-theme.css" rel="stylesheet" />
        <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        {/* Template Stylesheet */}
        <link href="css/style.css" rel="stylesheet" />
      </head>

      <body>
        {children}
        <a href="#" className="back-to-top">
          <i className="fa fa-angle-double-up" />
        </a>
        <ScriptLoader />
      </body>
    </html>
  );
}
