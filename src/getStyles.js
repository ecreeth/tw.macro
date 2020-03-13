import astify from './astify'
import styleLists from './styles.json'

export default function getStyles(str, t) {
  const styles = {}

  for (const className of str.split(' ')) {
    if (styleLists[className]) {
      Object.assign(styles, styleLists[className])
    } else {
      console.warn(`Unsupported Tailwind class: "${className}"`)
    }
  }

  return astify(styles, t)
}
