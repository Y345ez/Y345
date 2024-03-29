const fs = require("fs-extra");
const path = require("path");
const matter = require("gray-matter");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  transpilePackages: [
    "@mui/icons-material",
    "@mui/x-date-pickers",
    "@devexpress/dx-react-grid-material-ui",
    "gsap",
    "lucide-react", 
  ],
  images: {
    domains: ["cdn.discordapp.com","i.scdn.co","i.imgur.com","crafatar.com"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const articlesDir = path.join(__dirname, "articles");
      const files = fs.readdirSync(articlesDir);

      files.forEach((filename) => {
        const filePath = path.join(articlesDir, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);
        const slug = generateSlug(data.title);

        const newFilePath = path.join(articlesDir, `${slug}.md`);
        if (filename !== `${slug}.md`) {
          fs.renameSync(filePath, newFilePath);
        }
        console.log(`slug renamed to ${slug}.md`);
      });
    }

    return config;
  },
};

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .trim();
}
