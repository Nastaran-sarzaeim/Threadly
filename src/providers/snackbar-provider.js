"use client";
import { SnackbarProvider } from "notistack";

export default function Providers({ children }) {
    return (
        <SnackbarProvider maxSnack={3}>
            {children}
        </SnackbarProvider>
    );
}
