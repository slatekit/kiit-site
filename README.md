# Slatekit-site
Sources for the slatekit.com Website

# Overview
This contains all the source code for generating www.slatekit.com site content. 
This uses a static site generator ( Hugo ) and most of the content is in markdown.
It is automatically published to https://www.netlify.com/

# Install
1. Hugo ( see https://gohugo.io/getting-started/installing/ )
2. Clone this repo ( git clone git@github.com:code-helix/slatekit-site.git )

# Develop
Currently, the root directory of the hugo theme/site is at **src/hugo/slatekit-v3**

```bash
# Move to dir
cd ~/git/slatekit-site/src/hugo/slatekit-v3

# Run hugo while serving drafts
hugo serve -D 

# Go to http://localhost:1313/
```

# Publish
Make changes on a separate branch e.g **docs-version-1.20.0** and then merge to main/master.

1. Move to directory `cd ~/git/slatekit-site/src/hugo/slatekit-v3`
2. Generate site `hugo`
3. Content is at `~/git/slatekit-site/src/hugo/slatekit-v3/public`
4. Copy content to root directory e.g. `public/info` -> `~/git/slatekit-site/info`
5. Publish your branch
6. Create a PR to merge your branch to main/master.
7. After the merge to main/master, the site will automatically update ( there may be a slight delay due to cached content )


# Directories

name | purpose | location 
--|---|---
theme   | current theme used for the site | src/hugo/slatekit-v3/themes/wavo
content | content of each page | src/hugo/slatekit-v3/content/start/overview
assets  | web assets like css, js, images | src/hugo/slatekit-v3/themes/wavo/static/assets
shortcodes   | reusable snippets of html | src/hugo/slatekit-v3/themes/layouts/shortcodes/sk-modules.html



