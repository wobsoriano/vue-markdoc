import type { Plugin } from 'vite'
import { dataToEsm } from '@rollup/pluginutils'
import Markdoc from '@markdoc/markdoc'

type Options = Parameters<typeof Markdoc.transform>['1']

const mdExtRE = /\.(md)$/i

export default function (options?: Options): Plugin {
  return {
    name: 'vite-plugin-markdoc',
    enforce: 'pre',
    transform(code, id) {
      if (!mdExtRE.test(id))
        return null

      const ast = Markdoc.parse(code)
      const content = Markdoc.transform(ast, options)

      return {
        code: dataToEsm(content, {
          preferConst: true,
          namedExports: true,
        }),
        map: { mappings: '' },
      }
    },
  }
}
