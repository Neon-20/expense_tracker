import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

const NavHeader = () => {
    return ( 
        <div className="top-0 mx-auto  fixed border-2 active:border-2
        items-center flex justify-between w-full h-16 bg-white z-50 shadow-md
        "> 
        <div className="px-4 items-center justify-between">
        Hey there
        </div>
        {/* <Button size="lg" variant="default" className="mr-2">
        Login here
        </Button> */}
        <ClerkLoading>
      <Loader className="h-5 w-5 mr-4 text-muted-foreground animate-spin"/>
    </ClerkLoading>
    <ClerkLoaded>
      <SignedIn>
        <div className="mt-1">
        <UserButton afterSignOutUrl="/"/>
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton
        afterSignInUrl="/dashboard"
        afterSignUpUrl="/dashboard"
        mode="modal"
        >
        <Button variant="default" className="mr-2">
        Login 👨🏻‍💻
        </Button>
        </SignInButton>
      </SignedOut>
    </ClerkLoaded>
        </div>
    );
}

export default NavHeader;