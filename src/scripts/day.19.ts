import { data } from "../data/day.19";

const [patterns, ...designs] = data.split('\n').filter(line => line);

const isDesignPossible = (design: string, patterns: string[]): boolean => {
  const dp = Array(design.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= design.length; i++) {
    for (const pattern of patterns) {
      if (i >= pattern.length && dp[i - pattern.length] && design.slice(i - pattern.length, i) === pattern) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[design.length];
};

const possibleDesignsCount = designs.reduce((count, design) => {
  return count + (isDesignPossible(design, patterns.split(', ')) ? 1 : 0);
}, 0);

console.log(`Number of possible designs: ${possibleDesignsCount}`);
