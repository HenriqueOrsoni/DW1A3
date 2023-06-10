document.addEventListener('DOMContentLoaded', function() {
  const cpfInput = document.querySelector('input[data-js="cpf"]');
  const cnpjInput = document.querySelector('input[data-js="cnpj"]');
  const phoneInput = document.querySelector('input[data-js="phone"]');
  const cepInput = document.querySelector('input[data-js="cep"]');
  const pisInput = document.querySelector('input[data-js="pis"]');

  cpfInput.addEventListener('blur', function() {
      let value = this.value.replace(/\D/g, '');
      value = value.slice(0, 11);
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      this.value = value;
  
      if (value.length === 11) {
          validateCPF(value);
      }
  });

  cnpjInput.addEventListener('blur', function() {
      let value = this.value.replace(/\D/g, '');
      value = value.slice(0, 14);
      value = value.replace(/(\d{2})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1/$2');
      value = value.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
      this.value = value;
  
      if (value.length === 14) {
          validateCNPJ(value);
      }
  });

  phoneInput.addEventListener('blur', function() {
      let value = this.value.replace(/\D/g, '');
      value = value.slice(0, 11);
      value = value.replace(/(\d{2})(\d)/, '($1) $2');
      value = value.replace(/(\d{4})(\d)/, '$1-$2');
      value = value.replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3');
      this.value = value;
  
      if (value.length === 11) {
          validatePhone(value);
      }
  });

  cepInput.addEventListener('blur', function() {
      let value = this.value.replace(/\D/g, '');
      value = value.slice(0, 8);
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
      this.value = value;
  
      if (value.length === 8) {
          validateCEP(value);
      }
  });

  pisInput.addEventListener('blur', function() {
      let value = this.value.replace(/\D/g, '');
      value = value.slice(0, 11);
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{5})(\d)/, '$1.$2');
      value = value.replace(/(\d{2})(\d{1,2})$/, '$1-$2');
      this.value = value;
  
      if (value.length === 11) {
          validatePIS(value);
      }
  });

  function validateCPF(value) {
      if (value.length < 11) {
          return;
      }
      // Adicione outras validações específicas para CPF, se necessário
      // Resto do código de validação
  }

  function validateCNPJ(value) {
      if (value.length < 14) {
          return;
      }
      // Adicione outras validações específicas para CNPJ, se necessário
      // Resto do código de validação
  }

  function validatePhone(value) {
      if (value.length < 11) {
          return;
      }
      // Adicione outras validações específicas para telefone, se necessário
      // Resto do código de validação
  }

  function validateCEP(value) {
      if (value.length < 8) {
          return;
      }
      // Adicione outras validações específicas para CEP, se necessário
      // Resto do código de validação
  }

  function validatePIS(value) {
      if (value.length < 11) {
          return;
      }
      // Adicione outras validações específicas para PIS, se necessário
      // Resto do código de validação
  }
});
