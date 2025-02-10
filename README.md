<!-- Logo -->
<p align="center">
  <img src="https://raw.githubusercontent.com/CoconutGoodie/figma-plugin-react-vite/master/.github/assets/logo.png" height="100px" alt="Logo"/>
</p>
<h1 align="center"></h1>

<!-- Slogan -->
<p align="center">
   Create scalable Figma plugins with ease, using the power of React + Vite!
</p>

# 🗝 Key Features

1. **_Logical Sides in Mind:_** Figma plugins that render a UI work on two different processes (split into code.js and index.html in Figma docs). This boilerplate keeps the sides separated by allowing them to share code (under ./src/common/).

2. **_Intercommunitive:_** Logical sides should be able to communicate with each other without creating huge and unscalable nested if statements. This boilerplate solves it by declaring isolated events and handlers (under `./src/common/networkSides.ts`)! (Using the [Monorepo Networker](https://github.com/CoconutGoodie/monorepo-networker) library)

3. **_Easy to Build:_** Configure the `figma.manifest.ts` config with your plugin credentials once, then just build with your everyday `npm run build` command! The `/dist` folder will be ready to publish already!

4. **_Bundled into One File:_** Figma plugins only accept a single file for `main` (js) and `ui` (html), which makes deployment of multiple files linked to each other impossible. This boilerplate is configured to bundle/inline most of the things you need like rasterize/vector image asset imports, CSS URL statements, and of course, source code imports.

5. **_SVG as Component:_** Yes, you can import SVGs as inlined sources with `*.svg?url`, but what about actually importing them as React components? Easy! You can import an SVG file as a React component with `*.svg?component` (See `/src/ui/app.tsx` for examples) (Using the [vite-plugin-react-rich-svg](https://github.com/iGoodie/vite-plugin-react-rich-svg) plugin)

6. **_Sassy:_** A classic, this boilerplate supports Sass/Scss/Less and modules! Check out `/src/ui/styles/` for 7-1 Sass Template and `/src/ui/components/Button.module.scss` for module examples.

# 💻 How to run this plugin?

1. First thing after you clone should be to install the dependencies by executing:

```
npm install
```

2. Create a figma plugin. In Figma, right click while you're in a design file. Follow `Plugins > Development > New Plugin...`. You can also type `"New Plugin...` to the global search (Windows: <kbd>CTRL</kbd> + <kbd>P</kbd>, Mac: <kbd>⌘ Command</kbd> + <kbd>P</kbd>)
3. Follow the steps on opened window. I recommend using `Default` or `Run once` layout, because you'll only need to save the manifest (for the plugin id it generates). Click "Save as", and save it to a temporary place. Then click "Open folder" to navigate to the folder it generated
4. Note down the `id` field from the `manifest.json` it generated.
5. Go to `figma.manifest.ts`, and replace the `id` with the id you noted down. Then configure the manifest there as you like. (See [Official Figma Plugin Manifest doc](https://www.figma.com/plugin-docs/manifest/))

## 🖱 Developing

Development is very straight forward. Just run the dev command, and it will start compiling your files as you code.

```
npm run dev
```

Once dev is ran, `dist/` folder will be created, which includes your `manifest.json`. You can load it in Figma, by `Right Click > Plugins > Development > Import plugin from manifest...`

> [!TIP]
> You can turn on the `Hot reload plugin` option in Figma, to automatically reload when files in `dist/` changes.

### 🦴 Developing without Figma Context

If you like developing your UI first, then integrating with Figma context; you can run your UI code in browser just like your every other Vite project by running:

```
npm run dev:ui-only
```

> [!NOTE]
> Since Figma context is not available in "ui-only" mode, any attempt to Figma API/SDK calls will look like a crash on your inspector/console.

## 🔨 Building

Building with the following command line will yield with a `dist` folder, which is ready to be used by Figma:

```
npm run build
```

Then, `dist/manifest.json` can be used to load the plugin. In Figma, right click while you're in a design file. Follow `Plugins > Development > Import plugin from manifest...`. You can also type `"Import plugin from manifest...` to the global search (Windows: <kbd>CTRL</kbd> + <kbd>P</kbd>, Mac: <kbd>⌘ Command</kbd> + <kbd>P</kbd>). Then select `dist/manifest.json`

## 📦 Publishing

After building, built `dist` folder is going to contain every artifact you need in order to publish your plugin. Just build, and follow [Figma's Official Post on Publishing Plugins](https://help.figma.com/hc/en-us/articles/360042293394-Publish-plugins-to-the-Figma-Community#Publish_your_plugin).

## 🕸 File Structure

- `src`
  - `src/common/` : Sources that are intended to be used both by plugin and ui logical sides.
    - `src/common/networkSides.ts` : Definitions of logical sides and the events each one accepts. Whenever a new event type is needed, declare and update here.
  - `src/plugin/` : Sources of the plugin logical side. Place everything that interracts with figma here.
  - `src/ui/` : Sources of the ui logical side, a classical Vite + React source base.
- `scripts`
  - `scripts/vite/` : Potential custom vite plugins written for your project
  - `scripts/windows/` : Potential custom Windows OS scripts
  - `scripts/macos/` : Potential custom Mac OS scripts
- `figma.manifest.ts` - A module that exports [Figma Plugin Manifest](https://www.figma.com/plugin-docs/manifest/) for the build scripts
