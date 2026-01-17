import type { Metadata } from "next";
import "./globals.css";
import "./common.scss";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aurify Technologies",
  description:
    "Modern super admin dashboard with comprehensive management tools",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="backgrround_imgage fixed inset-0 -z-1 bg-no-repeat bg-cover">
          <Image
            src={"/images/background.svg"}
            height={1000}
            width={1000}
            alt=""
          />
        </div>
        {children}
      </body>
    </html>
  );
}
