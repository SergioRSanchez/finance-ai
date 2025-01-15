import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import Navbar from "../_components/navbar";

const SubscriptionPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }
  return <Navbar />;
};

export default SubscriptionPage;
