import Guest from "./components/Guest";
import { checkUser } from "@/lib/checkUser";
import { User } from "@prisma/client";

const HomePage = async () => {
  const user = await checkUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <main>
      <h1>
        Welcome {user.name || user.email} to Expense Tracker
      </h1>
    </main>
  );
};
export default HomePage;