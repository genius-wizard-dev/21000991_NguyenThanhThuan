const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
  ]);
  
  const events = [...new Set(gameEvents.values())];
  console.log('1. Unique events:', events);
  
  
  gameEvents.delete(64);
  console.log('2. Game events after removing unfair yellow card:', gameEvents);
  
  const totalTime = [...gameEvents.keys()].pop();
  console.log(`3. An event happened, on average, every ${totalTime / gameEvents.size} minutes`);
  
  for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${minute}: ${event}`);
  }
  