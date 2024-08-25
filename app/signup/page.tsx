"use client"
import { FormEvent, useState } from "react";
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
import { PacmanLoader } from "react-spinners";

export default function LoginPage() {
   // Loading state to track if the data is still processing 
   const [loading, setLoading] = useState(false);

   // State to store any error messages
   const [error, setError] = useState<string | null>(null);

   const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     setLoading(true);
     setError(null); // Clear any previous errors

     // Create a FormData object from the form
     const formData = new FormData(e.currentTarget);

     try {
       const response = await signup(formData); // Pass the form data to the login function

       if (!response.success) {
         setError(response.error); // Set the error message from the server
       } else {
         // Handle successful login (e.g., redirect)
         window.location.href = '/';
       }
     } catch (error) {
       console.error("Login error:", error);
       setError("An unexpected error occurred. Please try again."); // Fallback error message
     } finally {
       setLoading(false);
     }
   };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your email & password below  to Sign up to your account
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
          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <PacmanLoader color="#ffffff" size={10} />
            ) : (
              "Signup"
            )}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/signup" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
