<p align="center">
  <h1 align="center">tw.macro</h1>
</p>
<!-- <p align="center" style="font-size: 1.3rem;">Use Tailwind in React Native<br /></p> -->

```js
// In
import tw from 'twin.macro'
const buttonStyles = tw`bg-purple-700 text-sm`

// Out
const buttonStyles = {
  backgroundColor: '#6b46c1',
  fontSize: '0.875rem'
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

## Examples
Go to [codesandbox](https://codesandbox.io/s/cool-brattain-beb8r) for see this example

![imagen](https://user-images.githubusercontent.com/20761166/76672256-b9bb6f80-6571-11ea-8dbf-59714c742c2a.png)

## Code credits

This project stemmed from [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn) and [twin.macro](https://github.com/ben-rogerson/twin.macro)
