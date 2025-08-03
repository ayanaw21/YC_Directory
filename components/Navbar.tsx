import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
	const session = await auth();
	return (
		<header className="py-3 px-5 bg-white shadow-sm">
			<nav className="flex justify-between items-center">
				<Link href="/">
					<Image
						src="/logo.png"
						alt="yc_directory"
						width={144}
						height={30}
					/>
				</Link>

				<div className="flex items-center gap-5 text-black">
					{session && session?.user ? (
						<>
							<Link href="/startup/create">
								<span>Create</span>
							</Link>
							<form
								action={async () => {
									"use server";
									await signOut();
								}}
							>
								<button type="submit">logout</button>
							</form>
							<Link href={`/user/${session?.user?.id}`}>
								<span>{session?.user?.name}</span>
							</Link>
						</>
					) : (
						<form
							action={async () => {
								"use server";
								await signIn("github");
							}}
						>
							<button type="submit">Signin</button>
						</form>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
