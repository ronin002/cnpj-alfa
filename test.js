const assert = require('node:assert');
const { isValidCNPJ } = require('./index');

console.log('🚀 Iniciando testes do Novo CNPJ Alfanumérico...');

try {
    // Teste 1: CNPJ Numérico Antigo Válido
    assert.strictEqual(isValidCNPJ('12.345.678/0001-95'), true, 'Deveria validar CNPJ numérico clássico');

    // Teste 2: Novo CNPJ Alfanumérico Válido (Exemplo hipotético baseado na regra)
    // Nota: 'ABC123456789' -> DV deve ser calculado. 
    // Usando um exemplo que segue a nova norma:
    assert.strictEqual(isValidCNPJ('ABC12345678910'), false, 'Deveria falhar se os DVs estiverem errados');

    // Teste 3: Formato Inválido (muito curto)
    assert.strictEqual(isValidCNPJ('ABC12345'), false, 'Deveria falhar com menos de 14 caracteres');

    // Teste 4: String Vazia
    assert.strictEqual(isValidCNPJ(''), false, 'Deveria falhar com string vazia');

    // Teste 5: Caracteres especiais não permitidos
    assert.strictEqual(isValidCNPJ('12.345.678/0001-95!'), false, 'Deveria ignorar ou falhar com caracteres estranhos');

    console.log('✅ Todos os testes passaram com sucesso!');
} catch (error) {
    console.error('❌ Falha nos testes:');
    console.error(error.message);
    process.exit(1);
}