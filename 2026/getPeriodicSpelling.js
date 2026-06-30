function getPeriodicSpelling(word) {
  const symbols = new Set([
    "H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"
  ]);

  const lower = word.toLowerCase();

  function dfs(i) {
    if (i === lower.length) return [];

    // try 1-letter
    const one = word[i].toUpperCase();
    if (symbols.has(one)) {
      const res = dfs(i + 1);
      if (res) return [one, ...res];
    }

    // try 2-letter
    if (i + 1 < word.length) {
      const two =
        word[i].toUpperCase() + word[i + 1].toLowerCase();

      if (symbols.has(two)) {
        const res = dfs(i + 2);
        if (res) return [two, ...res];
      }
    }

    return null;
  }

  const result = dfs(0);
  return result || [];
}
