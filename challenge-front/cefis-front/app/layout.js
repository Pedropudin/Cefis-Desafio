import Header from "./elements/Header"

export const metadata = {
  title: 'Desafio Cefis',
  description: 'Desafio Full-Stack feito por Pedro Oliveira',
}

export default function RootLayout({ children }) {
 return (
    <html lang="pt-BR">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}