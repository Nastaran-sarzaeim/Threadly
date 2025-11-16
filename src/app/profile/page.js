"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("loggedInUser");
    if (!data) return router.push("/login");

    setUser(JSON.parse(data));
  }, []);

  if (!user) return null;

  return (
    <div className="p-10 text-xl">
      سلام {user.username} عزیز 🥰  
    </div>
  );
}
