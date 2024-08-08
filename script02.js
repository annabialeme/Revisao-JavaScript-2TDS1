let quantidadeIngressos = 9;
let batataPromocao = 0;

for (let i= 1; i <= quantidadeIngressos; i++ ){
    if (i % 3 === 0) {
    batataPromocao++;
    }
}

console.log(batataPromocao); 