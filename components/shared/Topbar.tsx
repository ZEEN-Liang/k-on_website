import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignIn, SignOutButton } from "@clerk/nextjs";

function Topbar(){
    return(
        <nav className="p-2 bg-blue-950">
            <Link href="/" className="flex items-center gap-4">
                <Image 
                    src="/assets/logo.svg" 
                    alt="logo" 
                    width={50} 
                    height={50}
                />
                <p className="font-mono text-4xl font-bold text-blue-300 max-xs:hidden">K-ON</p>
            </Link>

            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    <SignedIn>
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                                <Image
                                  src="/assets/logout.svg" 
                                  alt="logout"
                                width={24}
                                height={24}
                                />
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>


            </div>
        </nav>

    )
}

export default Topbar;