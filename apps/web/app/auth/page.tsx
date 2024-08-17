'use client'
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <main className="min-h-screen w-full bg-stone-50">
      <CardHeader className=" mx-auto grid min-w-sm max-w-4xl ">
        <CardTitle>ecco plataform</CardTitle>
        <CardDescription>A plataforma para a sua empresa</CardDescription>
      </CardHeader>
      <CardContent className="mx-auto grid min-w-sm max-w-4xl space-y-4">
        <CardTitle>Login</CardTitle>
        <Input placeholder="email" type="email" ></Input>
        <Input placeholder="password" type="password" ></Input>
        <Button onClick={() => console.log('loggin')}>Login</Button>
        <Button variant={"link"} >Recovery Password</Button>
      </CardContent>
    </main>
  )
}
