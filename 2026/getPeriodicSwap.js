function getPeriodicSpelling(word) {
  const elements = [
    "H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"
  ];

  const lookup = new Map();
  for (const symbol of elements) {
    lookup.set(symbol.toLowerCase(), symbol);
  }

  word = word.toLowerCase();

  function search(index) {
    if (index === word.length) {
      return [];
    }

    // Try 2-letter symbols first
    if (index + 1 < word.length) {
      const two = word.slice(index, index + 2);
      if (lookup.has(two)) {
        const result = search(index + 2);
        if (result !== null) {
          return [lookup.get(two), ...result];
        }
      }
    }

    // Then try 1-letter symbols
    const one = word[index];
    if (lookup.has(one)) {
      const result = search(index + 1);
      if (result !== null) {
        return [lookup.get(one), ...result];
      }
    }

    return null;
  }

  return search(0) || [];
}