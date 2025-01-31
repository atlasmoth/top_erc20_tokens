import { fetchHoldersData } from "./components/action";
import ErrorScreen from "./components/ErrorScreen";
import List from "./components/List";

export default async function Home() {
  try {
    const holders = await fetchHoldersData();

    return <List holders={holders} />;
  } catch (error) {
    console.log(error);
    return <ErrorScreen />;
  }
}
