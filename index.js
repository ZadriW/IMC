
function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const imc = peso / (altura * altura);
    let classeIMC = '';

    if (imc < 16.91) {
        classeIMC = 'Muito abaixo do peso';
    } else if (imc < 18.41) {
        classeIMC = 'Abaixo do peso';
    } else if (imc < 25) {
        classeIMC = 'Peso normal';
    } else if (imc < 30) {
        classeIMC = 'Acima do peso';
    } else {
        classeIMC = 'Obesidade';
    }

    const resultado = `Seu IMC é ${imc.toFixed(2)} e você está na categoria: ${classeIMC}`;
    document.getElementById('resultado').textContent = resultado;
}

// Vincula a função ao evento de envio do formulário
document.getElementById('imcForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    calcularIMC();
});
