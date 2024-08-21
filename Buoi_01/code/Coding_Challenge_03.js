const avgScore = (score1, score2, score3) => Math.round(((score1 + score2 + score3) / 3)* 100) /100;

// Test:
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
const avgScoreDolphins = avgScore(96, 108, 89);
const avgScoreKoalas = avgScore(81, 91, 110);

// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// const avgScoreDolphins = avgScore(97, 112, 101);
// const avgScoreKoalas = avgScore(109, 95, 123);

// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// const avgScoreDolphins = avgScore(97, 112, 101);
// const avgScoreKoaalas = avgScore(109, 95, 106);

console.log(`Điểm trung bình của Dolphins: ${avgScoreDolphins}`);
console.log(`Điểm trung bình của Koalas: ${avgScoreKoalas}`);

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
    console.log(`Dolphins win (${avgScoreDolphins} vs ${avgScoreKoalas})`);
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
    console.log(`Koalas win (${avgScoreKoalas} vs ${avgScoreDolphins})`);
} else if (avgScoreDolphins === avgScoreKoalas && avgScoreDolphins >= 100 && avgScoreKoalas >= 100) {
    console.log(`Draw (${avgScoreDolphins} vs ${avgScoreKoalas})`);
} else {
    console.log(`No team wins (${avgScoreDolphins} vs ${avgScoreKoalas})`);
}



