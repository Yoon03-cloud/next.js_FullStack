import "./App.css";

interface HeaderProps extends TitleProps {
  noti: number;
}

interface TitleProps {
  title: string;
}

const Header = ({ title, noti }: HeaderProps) => {
  return (
    <Layout>
      <h1>
        {title} - {noti}
      </h1>
    </Layout>
  );
};

const Footer = ({ title }: TitleProps) => {
  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  );
};

const Layout = ({ children }: Readonly<React.PropsWithChildren>) => {
  return <div className="layout">{children}</div>;
};

function App() {
  const count = 0;
  return (
    <>
      <Header title="App Header" noti={43} />
      <Footer title="App Footer" />
      <h1>App Counter </h1>
      <p>Count: {count}</p>
    </>
  );
}

export default App;
