import './globals.css';
import { Metadata, Viewport } from 'next';
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from '../components/ui/theme-provider';

const APP_NAME = "memos";
const APP_DEFAULT_TITLE = "Memox";
const APP_TITLE_TEMPLATE = "%s - Memox";
const APP_DESCRIPTION = "Quick notes,";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html >
        <body>
          <ThemeProvider attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >{children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
