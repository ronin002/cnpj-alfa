# @klangorpa/cnpj-alfa

Uma biblioteca leve, rápida e sem dependências para validar CNPJs, já preparada para o novo formato **Alfanumérico (Modelo 2026)**.

## 🚀 Instalação

```bash
npm install @klangorpa/cnpj-alfa





📋 Características
Suporta o novo padrão de CNPJ alfanumérico.

Zero dependências (Node.js nativo).

Compatível com CommonJS.




🛠️ Como usar

const { isValidCNPJ } = require('@klangorpa/cnpj-alfa');

// Validação de CNPJ tradicional (numérico)
console.log(isValidCNPJ('12.345.678/0001-95')); // true

// Validação do novo CNPJ Alfanumérico (Padrão 2026)
console.log(isValidCNPJ('ABC123450001XX')); // true


📄 Licença
ISC
