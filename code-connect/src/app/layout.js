import { Aside } from "@/components/aside";
import "./globals.css";

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="app-container">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
