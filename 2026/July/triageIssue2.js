function triageIssue(title, labels) {
  const text = title.toLowerCase();
  const result = [...labels];

  const has = label => result.includes(label);
  const add = label => {
    if (!has(label)) result.push(label);
  };
  const remove = label => {
    const index = result.indexOf(label);
    if (index !== -1) result.splice(index, 1);
  };

  if (result.length === 0) {
    if (text.includes("error") || text.includes("bug")) {
      add("bug");
      add("needs triage");
    } else if (text.includes("feature") || text.includes("add")) {
      add("enhancement");
      add("discussing");
    }
  } else {
    if (has("needs triage")) {
      if (text.includes("simple") || text.includes("easy")) {
        remove("needs triage");
        add("good first issue");
      } else {
        remove("needs triage");
        add("help wanted");
      }
    } else if (has("discussing")) {
      if (text.includes("planned") || text.includes("next")) {
        remove("discussing");
        add("on the roadmap");
      } else {
        remove("discussing");
        add("help wanted");
      }
    }
  }

  if (text.includes("security")) {
    add("critical");
  }

  return result;
}