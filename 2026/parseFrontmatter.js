function parseFrontmatter(frontmatter) {
  const result = {};

  const lines = frontmatter.split("\n").slice(1, -1);

  for (const line of lines) {
    const separator = line.indexOf(":");
    const key = line.slice(0, separator);
    let value = line.slice(separator + 1).trim();

    if (value === "true") {
      value = true;
    } else if (value === "false") {
      value = false;
    } else if (!isNaN(value) && value !== "") {
      value = Number(value);
    }

    result[key] = value;
  }

  return result;
}
