import astify from './astify'
import styleLists from './styles.json'

export default function getStyles(str, t, state) {
  const styles = {}
  const mergeClasses = { ...styleLists, ...state.config }

  for (const className of str.split(' ')) {
    if (mergeClasses[className]) {
      Object.assign(styles, mergeClasses[className])
    } else {
      console.warn(`Unsupported Tailwind class: "${className}"`)
    }
  }

  return astify(styles, t)
}
