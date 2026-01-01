function parseItalics(markdown) {...}

function parseItalics(markdown) {
  let result = markdown.replace(
    /\*([^\s][^*]*[^\s])\*/g,
    "<i>$1</i>"
  );

  result = result.replace(
    /_([^\s][^_]*[^\s])_/g,
    "<i>$1</i>"
  );

  return result;
}
