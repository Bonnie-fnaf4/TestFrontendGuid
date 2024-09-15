import "./globals.css";
import {Layout, Menu} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import Link from "next/link";
import {Footer} from "antd/es/modal/shared";

const items = [
    {key: "home", label: <Link href="/">Home</Link>},
    {key: "plants", label: <Link href="/plants">Plants</Link>},
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en">
      <body>
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal" items={items} style={{ flex: 1, minWidth: 0 }} />
            </Header>
            <Content style={{ flex: 1, minHeight: 1080 }}>
                {children}
            </Content>
            <h1 style={{textAlign: "center", color: "black"}}>
                Ну тип мой второй сайт по фронту
            </h1>
        </Layout>
      </body>
    </html>
  );
}
