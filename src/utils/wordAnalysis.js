// Common words to exclude from analysis
const COMMON_WORDS = new Set([
  'in', 'at', 'on', 'off', 'to', 'the', 'a', 'an', 'and', 'or', 'but', 'for',
  'with', 'by', 'from', 'up', 'down', 'of', 'after', 'before'
]);

function tokenizeAndClean(text) { 
  if (!text) return [];
  return text.toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove special characters
    .split(/\s+/)
    .filter(word =>
      word.length > 1 && // Skip single characters
      !COMMON_WORDS.has(word) && // Skip common words
      !word.match(/^\d+$/) // Skip numbers
    );
}

function countWords(tokens) {
  const wordCount = new Map();
  
  tokens.forEach(token => {
    // Combine and process both name and symbol
    const words = [
      ...tokenizeAndClean(token.name),
      ...tokenizeAndClean(token.symbol)
    ];
    
    words.forEach(word => {
      wordCount.set(word, (wordCount.get(word) || 0) + 1);
    });
  });
  
  return Array.from(wordCount.entries())
    .sort((a, b) => b[1] - a[1]) // Sort by frequency
    .slice(0, 20); // Get top 20 words
}

function formatResults(wordStats) {
  const items = wordStats.map(([word, count]) => 
    `${word}: ${count} tokens`
  ).join('\n');
  
  return [
    '📊 Token Analysis (Last 500 Tokens)',
    '',
    '📝 Most Common Words:',
    items,
    '',
    '🔍 Analysis excludes common words and numbers',
    '',
    'For more real time meta analysis visit https://pumprush.fun'
  ].join('\n');
};