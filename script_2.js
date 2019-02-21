// Un prompt s'affiche avec la question suivante


number = prompt('De quel nombre veux-tu calculer la factorielle ?');

console.log(`Le résultat est ${factorial(number)} !`);

var f = []
function factorial(n) {
  if (n == 0 || n == 1)
    return 1;
  return factorial(n-1) * n;
} 