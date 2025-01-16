import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />

      <SummaryCards />
    </>
  );
};

export default Home;
