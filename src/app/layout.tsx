import type { Metadata } from "next";
import { StyledThemeProvider } from "@theme/ThemeProvider";
import { RTKProvider } from "@store/index";
import { GlobalStyle } from "@theme/globalStyles";
import AppWrapper from "./AppWrapper";

export const metadata: Metadata = {
    title: "Email Template Builder",
    description: "Technical task",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AppWrapper>
                    <StyledThemeProvider>
                        <GlobalStyle />
                        <RTKProvider>{children}</RTKProvider>
                    </StyledThemeProvider>
                </AppWrapper>
            </body>
        </html>
    );
}
