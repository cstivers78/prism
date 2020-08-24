(function (Prism) {

  Prism.languages.rego = Prism.languages.extend('clike', {
    
    'comment': {
      pattern: /(^|[^\\])#.*/,
      lookbehind: true
    },
    
    'string': {
      pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    
    'class-name': /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@])*?(?=\s*\{)/,
    
    'function': /\w+(?=\()/,

    'number': /\b\d+\.?\d*/,
    
	  'operator': /[<>]=?|!=?|-?|\+?|\&?|\|?|\*/,
    
    'punctuation': /[(){}\[\],]/,
    
    'keyword': /\b(?:as|default|else|false|import|package|not|null|true|with)\b/,
  });

}(Prism));
