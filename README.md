<p align="center">
  <h1 align="center">tw.macro</h1>
</p>
<p align="center" style="font-size: 1.3rem;">Use Tailwind in React Native<br /></p>

```js
// In
import tw from '@ecreeth/tw.macro'
const buttonStyles = tw`bg-transparent text-sm text-blue-500`

// Out
const buttonStyles = {
  backgroundColor: 'transparent',
  fontSize: 14,
  color: '#4299e1'
}
```

## Install

#### 1. Install the dependencies

```bash
npm install -D @ecreeth/tw.macro babel-plugin-macros
# or
yarn add @ecreeth/tw.macro babel-plugin-macros -D
```

#### 2. Enable Babel macros in `.babelrc`

Enable Babel macros by adding "macros" to the plugin configuration:

```js
{
  "plugins": ["macros"]
}
```

## Personal styles

You can customize the default styles and even add your own. There are two ways to do:

### With package.json

```json
  "babelMacros": {
    "tailwind": {
      "file": "./my_personal_styles.json"
    }
  },
```

##### File Content

```json
{
  "bg-black": {
    "backgroundColor": "black"
  },
  "bg-personal": {
    "backgroundColor": "coral"
  }
}
```

### With config file

This configuration file can be any of the following:

- .babel-plugin-macrosrc
- .babel-plugin-macrosrc.json
- .babel-plugin-macrosrc.yaml
- .babel-plugin-macrosrc.yml
- .babel-plugin-macrosrc.js
- babel-plugin-macros.config.js

## Examples

Go to [codesandbox](https://codesandbox.io/s/cool-brattain-beb8r-7dx64) for see this example

![imagen](https://user-images.githubusercontent.com/20761166/76672256-b9bb6f80-6571-11ea-8dbf-59714c742c2a.png)

## Code credits

This project stemmed from [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn) and [twin.macro](https://github.com/ben-rogerson/twin.macro)
