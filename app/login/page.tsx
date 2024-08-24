"use client"
import Link from "next/link"
import { login, signup } from './actions'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <Card className="mx-auto max-w-sm">
    <CardHeader>
      <CardTitle className="text-2xl">Login</CardTitle>
      <CardDescription>
      Enter your email below to login to your account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email" name="email" type="email" 
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            {/*<Link href="#" className="ml-auto inline-block text-sm underline">
              Forgot your password?
            </Link>*/}
          </div>
          <Input id="password" name="password" type="password" required />
        </div>
        <Button type="submit" className="w-full" formAction={login}>
          login
        </Button>
        {/*<Button variant="outline" className="w-full" >
          Login with Google
        </Button>*/}
      </form>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline" >
          sign up
        </Link>
      </div>
    </CardContent>
  </Card>
  )
}





{/* <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <br/><br/>
      <button formAction={signup}>Sign up</button>*/}