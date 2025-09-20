import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <>
          <Header />
            {children}
          <Footer />
        </>
  );
}
