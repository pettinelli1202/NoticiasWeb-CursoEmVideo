function calcular_total() {
    var qtd = (document.getElementById('campoQuantidade').value);
    total = qtd * 1500;
    document.getElementById('campoPreco').value = total;
}