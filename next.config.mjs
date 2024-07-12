/** @type {import('next').NextConfig} */

const prefix =
  process.env.NODE_ENV === "production"
    ? "https://seoyeom542.github.io/dongsupwiki"
    : "";

const nextConfig = {
  output: "export",
  basePath: "/dongsupwiki",
};

export default nextConfig;
