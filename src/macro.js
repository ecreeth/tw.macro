import { createMacro } from 'babel-plugin-macros'
import parseTte from './parseTte'
import getStyles from './getStyles'
import replaceWithLocation from './replaceWithLocation'

export default createMacro(twinMacro)

function twinMacro({ babel: { types: t }, references, state }) {
  const program = state.file.path

  references.default.forEach(path => {
    const parent = path.findParent(x => x.isTaggedTemplateExpression())
    if (!parent) return

    const parsed = parseTte({
      path: parent,
      types: t,
      state
    })
    if (!parsed) return

    replaceWithLocation(parsed.path, getStyles(parsed.str, t))
  })

  program.scope.crawl()
}
