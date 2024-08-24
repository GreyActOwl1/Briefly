"use client"
import Link from "next/link"
import { signup } from '../login/actions'
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
      <CardTitle className="text-2xl">Signup</CardTitle>
      <CardDescription>
        Enter your email & password below to signup for an account
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
        <Button type="submit" className="w-full" formAction={signup}>
          signup
        </Button>
        {/*<Button variant="outline" className="w-full" >
          Login with Google
        </Button>*/}
      </form>
      <div className="mt-4 text-center text-sm">
        already have an account?{" "}
        <Link href="/login" className="underline" >
          login
        </Link>
      </div>
    </CardContent>
  </Card>
  )
}