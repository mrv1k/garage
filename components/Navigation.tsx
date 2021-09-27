import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const paths = ["/", "/about", "/blog"];

const Navigation = (): JSX.Element => {
  const router = useRouter();

  return (
    <nav className="row-start-1 mb-4 nav md:row-start-2 md:mb-0 v-underline-links">
      <ol className="flex md:flex-col">
        {paths.map((path) => (
          <li key={path}>
            <Link href={path}>
              <a className={router.pathname === path ? "active" : ""}>
                {path.replace("/", (match, offset, string) => {
                  if (string === "/") return "home";
                  return "";
                })}
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Navigation;
