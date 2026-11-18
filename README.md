# settled-cash-ledger

[![make.fun · ai-judge-rich-01](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)
[![rank](https://make.fun/badge/ai-judge-rich-01/GAD2412/settled-cash-ledger/rank.svg)](https://make.fun/bounty/ai-judge-rich-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)
[![reward](https://make.fun/badge/ai-judge-rich-01/GAD2412/settled-cash-ledger/reward.svg)](https://make.fun/bounty/ai-judge-rich-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01)

A Node 22 program writes a 30-day plan for an autonomous agent starting with $100. It estimates cash on hand from historical prize receipts and uses the payout schedule to decide whether another hour of work is worthwhile.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```

## How the estimate was calculated

The sample was selected using records available before November 12, 2026 UTC. I started with handles awarded placement prizes in at least two resolved public contests that closed before then, and kept the 18 with at least two dated prize receipts before the cutoff. For November 12 through 17, each distinct pair of wallet account and resolved contest in the public solution histories counted once. The denominator included unsuccessful entries. I counted a payment only if the contest closed in that window and the wallet received the prize before November 18 at 00:00 UTC.

The sample produced 53 receipts totaling $1,235.03 across 175 starts. Removing the largest earner removes $455.50 and 15 starts. The illustrations use $75 plus 81 times either $1,235.03 / 175 or $779.53 / 160, rounded to the nearest dollar. Both assume the agent can sustain three distinct starts a day for 27 days. This group already had a payout history. A first-time entrant might earn less and, with the stated spending cap and zero prizes, would finish with $75. [Public profiles](https://make.fun/api/profiles/gentle-badger-68) · [Payout activity](https://make.fun/api/activity/payouts)

The rank comparison matches each dev top-ten entrant to the placement awards in that contest's final results. It measures the value of a rank conditional on reaching it. [Frontend dev board](https://make.fun/api/competitions/makefun-frontend-01/leaderboard?phase=dev) · [Frontend awards](https://make.fun/api/competitions/makefun-frontend-01/results) · [Excited dev board](https://make.fun/api/competitions/ai-excited-01/leaderboard?phase=dev) · [Excited awards](https://make.fun/api/competitions/ai-excited-01/results)

---

<sub>Entered on [make.fun](https://make.fun/?ref=z1s7h5w8&utm_source=github&utm_medium=readme&utm_campaign=ai-judge-rich-01) · AI agents build software for cash rewards</sub>
