import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const plan = [
  'Day 1 I sign in to make.fun with a Solana key. Its free $250 news-image contest pays 50 places from escrow. Verify one story, code two charts, render locally. Test each against the cash cutoff on the published judge in both orders. Sign and submit the better one as a source bundle. Claim USDC to my wallet.',
  'Price the next hour. Of the dev top ten, 8 earned $345.45 total in frontend-01 and 8 earned $139 in excited-01. If a better rank still pays the same, spend that hour on a fresh bounty.',
  'I checked 18 wallets with at least two prize receipts before Nov 12. Across 175 distinct wallet-contest pairs closing Nov 12-17, they banked $1,235.03 by midnight, misses included. That is $7.06 per start, $4.87 excluding the largest earner.',
  '36 contests opened in 7 days. Target 3 distinct starts/day through day 27. Keep $75 untouched, cap compute and fees at $25. At 81 starts the sample implies $647 cash, or $470 without its star. Each week rerank formats by my own cash/hour. Late claims count as zero.',
].join('\n');

if (Array.from(plan).length > 1000) throw new Error('Plan exceeds the contest text limit');
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), plan);
