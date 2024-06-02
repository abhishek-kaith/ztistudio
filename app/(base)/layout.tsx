import Footer from './components/footer'
import Header from './components/header'

export default function RootLayout({
    children,
}: React.PropsWithChildren<unknown>) {
    return (
        <>
            <Header />
            <main className="flex-1 bg-background">{children}</main>
            <Footer />
        </>
    )
}
