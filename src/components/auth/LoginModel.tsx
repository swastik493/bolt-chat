"use client"
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";

export default function LoginModal() {
    return (
<Dialog>
  <DialogTrigger asChild>
    <Button>Getting Start</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className='text-2xl'>Welcome to Quick Chat</DialogTitle>
      <DialogDescription>
        QuickChat makes it effortless to create secure chat links and
        start onversation in seconds.
      </DialogDescription>
    </DialogHeader>
    <Button variant="outline">
      <Image
        src="/images/google.png"
        className='mr-4'
        width={25}
        height={25}
        alt='google_logo'

        />
        Continue With Google
    </Button>
  </DialogContent>
</Dialog>
    )
}