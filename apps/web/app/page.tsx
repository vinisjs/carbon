import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Card className="p-4 space-y-2">
        <CardTitle>EM DESENVOLVIMENTO</CardTitle>
        <CardDescription>Volte em Breve</CardDescription>
      </Card>
    </main>
  );
}
