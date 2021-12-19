interface ITokens {
  readonly '#': { pattern: RegExp }
  readonly N: { pattern: RegExp }
  readonly A: { pattern: RegExp }
}

interface IConstants {
  readonly TOKENS: ITokens
}

const CONSTANTS: Readonly<IConstants> = Object.freeze({
  TOKENS: {
    '#': { pattern: /[0-9]/ }, // Only Numbers
    N: { pattern: /[0-9a-zA-Z]/ }, // Letters Or Numbers
    A: { pattern: /[a-zA-Z]/ }, // Only Letters
  }
})

export default CONSTANTS