"use client"
import { FormEvent, useState } from "react";
import Link from "next/link";
import { signup } from '../login/actions';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PacmanLoader } from "react-spinners";

export default function LoginPage() {

  //loading state to track if the data is still processing 
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Create a FormData object from the form
    const formData = new FormData(e.currentTarget);

    try {
      await signup(formData);//pass the form data to the signup function
    } catch (error) {
      console.error("Signup error:", error);//login any errors for debuggni
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Signup</CardTitle>
        <CardDescription>
          Enter your email & password below to signup for an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSignup}>
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
            </div>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <PacmanLoader color="#ffffff" size={10} />
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          already have an account?{" "}
          <Link href="/login" className="underline" >
            login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
