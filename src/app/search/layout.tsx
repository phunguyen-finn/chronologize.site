import FixedLayout from "@/components/Footer";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <FixedLayout>
            {children}
        </FixedLayout>
    );
}
