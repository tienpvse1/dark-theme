import { Button, Table } from "antd";
import Column from "antd/lib/table/Column";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Tags } from "./components/index/tags";
import { getRandomAccounts } from "./fake/account";

function App() {
  const { currentTheme, switcher } = useThemeSwitcher();

  const accounts = getRandomAccounts();

  const handleThemeChange = () => {
    switcher({ theme: currentTheme === "light" ? "dark" : "light" });
  };

  return (
    <div className="App">
      <Table dataSource={accounts} rowKey={(user) => user.id}>
        <Column title="Address" dataIndex="address" key="email" />
        <Column title="Username" dataIndex="username" key="username" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => <Tags tags={tags} />}
        />
        <Column title="Age" dataIndex="age" key="age" />
      </Table>
      <Button type="default" onClick={handleThemeChange}>
        toggle theme
      </Button>
    </div>
  );
}

export default App;
