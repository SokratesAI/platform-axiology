/** Strip the leading "Legitimate tension —" / "Genuine trade-off —" prefix
 *  some trade-off summaries open with, and re-capitalise the first character.
 *  Kept here so the cleanup is consistent everywhere we render summaries. */
export function stripTradeOffPrefix(summary: string): string {
  const stripped = summary.replace(/^(Legitimate|Genuine)\s+(trade-off|tension)\s*[—–-]\s*/i, '');
  if (!stripped) return stripped;
  return stripped.charAt(0).toUpperCase() + stripped.slice(1);
}
