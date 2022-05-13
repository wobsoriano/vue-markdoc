import { expect, test } from 'vitest'
import MarkdocLoader from '../src'
import path from 'path'

test('Correct markdown to tree-shakable ES Module imports', () => {
  // @ts-expect-error: Fix later
  const result = MarkdocLoader().transform!('', path.join(__dirname, 'content.md'))
  // @ts-expect-error: Fix later
  expect(result.code).toStrictEqual('export const $$mdtype = "Tag";\n'
  + 'export const name = "article";\n'
  + 'export const attributes = {\n'
  + '};\n'
  + 'export const children = [\n'
  + '];\n'
  + 'export default {\n'
  + '\t$$mdtype: $$mdtype,\n'
  + '\tname: name,\n'
  + '\tattributes: attributes,\n'
  + '\tchildren: children\n'
  + '};\n')
})
