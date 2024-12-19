import { data } from "../data/day.19";

const [patternsLine, ...designs] = data.trim().split('\n');
const patterns = patternsLine.split(', ');

const memo = new Map<string, boolean>();

function canConstruct(design: string): boolean {
  if (design === '') return true;
  if (memo.has(design)) return memo.get(design)!;

  for (const pattern of patterns) {
    if (design.startsWith(pattern)) {
      if (canConstruct(design.slice(pattern.length))) {
        memo.set(design, true);
        return true;
      }
    }
  }

  memo.set(design, false);
  return false;
}

let possibleDesignsCount = 0;

for (const design of designs) {
  if (canConstruct(design)) {
    possibleDesignsCount++;
  }
}

console.log(possibleDesignsCount);
