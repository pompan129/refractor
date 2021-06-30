'use strict'

module.exports = rego
rego.displayName = 'rego'
rego.aliases = []
function rego(Prism) {
  // https://www.openpolicyagent.org/docs/latest/policy-reference/
  Prism.languages.rego = {
    comment: /#.*/,
    property: {
      pattern:
        /(^|[^\\.])(?:"(?:\\.|[^\\"\r\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i,
      lookbehind: true,
      greedy: true
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"|`[^`]*`/,
      lookbehind: true,
      greedy: true
    },
    keyword:
      /\b(?:as|default|else|import|package|not|null|some|with|set(?=\s*\())\b/,
    boolean: /\b(?:true|false)\b/,
    function: {
      pattern: /\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i,
      inside: {
        namespace: /\b\w+\b(?=\s*\.)/,
        punctuation: /\./
      }
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    operator: /[-+*/%|&]|[<>:=]=?|!=|\b_\b/,
    punctuation: /[,;.\[\]{}()]/
  }
}
