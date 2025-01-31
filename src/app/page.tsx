import { fetchHoldersData } from "./actions/action";
import ErrorScreen from "./components/ErrorScreen";
import List from "./components/List";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ token: string; tokenName: string }>;
}) {
  try {
    const { token } = await searchParams;
    const holders = await fetchHoldersData(token);

    return <List holders={holders} token={token} />;
  } catch (error) {
    console.log(error);
    return <ErrorScreen />;
  }
}
