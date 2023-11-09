import Footer from "@/components/footer";
import {CartProvider} from "@/contexts/cart";
import "public/assets/css/main.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="">
        <CartProvider>{children}</CartProvider>

        <Footer />
      </body>
    </html>
  );
}
