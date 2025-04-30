Typical workflow:

    You make changes in your project files (src, etc).

    You do:

git add .
git commit -m "your commit message"
git push origin main

After that, you deploy again:

    npm run deploy

    (this automatically updates the gh-pages branch behind the scenes!)

⚡ Simple Rule:

    Code changes → commit to main

    Deployment → run npm run deploy to update gh-pages

You never manually touch gh-pages. It’s managed by the gh-pages npm package automatically.