export const javaPathHelper = function(options) {
  return '{' + options.fn(this) + 'Id}'
}

const esVocal = char => {
  return (/^[aeiou]$/i).test(char)
}

export const pluralizeHelper = function(options) {
  const string = options.fn(this)
  if (esVocal(string.slice(-1))) {
    return string + 's'
  }
  return string + 'es'
}
