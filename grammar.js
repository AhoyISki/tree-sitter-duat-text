/**
 * @file Parsing for string literals in the text! family of macros from Duat
 * @author AhoyISki <ahoyiski@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "duat_text",

  rules: {
    source_file: $ => repeat(choice(
      $._str_literal,
      $.expr_argument,
      $.form_argument,
    )),

    _str_literal: $ => choice(
      $.raw_sequence,
      $.quote_escape,
      $.ascii_escape,
      $.unicode_escape,
      $.string_continue,
      $.argument_delimiter_escape
    ),

    // NOT: \ [ ] { }
    raw_sequence: _ => /[^\\\{\}\[\]]+/,

    quote_escape: _ => /\\"|\\'/,

    ascii_escape: _ => /\\(0|t|n|r|"|'|\\|x[0-7][0-9a-fA-F])/,

    unicode_escape: _ => /\\u\{[0-9a-fA-F_]{1,6}\}/,

    string_continue: _ => /\\\n[\t\n\r ]*/,

    argument_delimiter_escape: _ => /\{\{|\}\}|\[\[|\]\]/,

    expr_argument: $ => seq(
      '{',
      optional($.identifiers),
      optional(seq(':', $.modifier)),
      '}',
    ),

    form_argument: $ => seq(
      '[',
      optional($.identifiers),
      optional(seq(':', $.modifier)),
      ']'
    ),

    identifiers: $ => seq(
      $.identifier,
      repeat(seq('.', $.identifier))
    ),

    identifier: _ => /[a-zA-Z_][0-9a-zA-Z_]*/,

    modifier: _ => /[^\{\}\[\]]*/
  },

  extras: _ => [],

});
