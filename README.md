# Eleventy Base

An [Eleventy](https://github.com/11ty/eleventy) starter based on [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog) adding Sass, custom webfonts, and JavaScript bundling with Parcel.

## Getting Started

1. Install dependencies

   ```shell
   npm install
   ```

2. Build and host locally for local development (with hot-reload)

   ```shell
   npm start
   ```

   Or in debug mode:

   ```shell
   npm run debug
   ```

   Or build the site into `_site`:

   ```shell
   npm run build
   ```

### Implementation Notes

- `about/index.md` shows how to add a content page.
- `posts/` has the blog posts but really they can live in any directory. They need only the `post` tag to be added to this collection.
- Add the `nav` tag to add a template to the top level site navigation. For example, this is in use on `index.njk` and `about/index.md`.
- Content can be any template format (blog posts needn’t be markdown, for example). Configure your supported templates in `.eleventy.js` -> `templateFormats`. \* Because `css` and `png` are listed in `templateFormats` but are not supported template types, any files with these extensions will be copied without modification to the output (while keeping the same directory structure).
- The blog post feed template is in `feed/feed.njk`. This is also a good example of using a global data files in that it uses `_data/metadata.json`.
- This example uses three layouts:
  - `_includes/layouts/base.njk`: the top level HTML structure
  - `_includes/layouts/home.njk`: the home page template (wrapped into `base.njk`)
  - `_includes/layouts/post.njk`: the blog post template (wrapped into `base.njk`)
- `_includes/postlist.njk` is a Nunjucks include and is a reusable component used to display a list of all the posts. `index.njk` has an example of how to use it.
