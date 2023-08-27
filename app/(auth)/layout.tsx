//specify different rules for authentication routes
// Route groups are useful for:
// 1- Organizing routes into groups e.g. by site section, intent, or team.
// so basically the (auth) thing will never be path of route url, but hover allows us to
// organise specific into a group (here : auth)
// 2- Enabling nested layouts in the same route segment level:
//below described code willl only apply to specifc routes(here auth) as said above.
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
import { dark } from "@clerk/themes";
export const metadata = {
  //this is sorta for SEO
  title: "Threads",
  description: "Nextjs Threads application",
};
const inter = Inter({ subsets: ["latin"] }); //font for auth routes subgroup only
export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={
        {
          // baseTheme: dark,
        }
      }
    >
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
