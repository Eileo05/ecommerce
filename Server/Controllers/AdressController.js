import Address from '../Models/Address.js'; 

export const createAddress = async (request, response) => {
    const { endereco, bairro, cidade, cep, complemento } = request.body;
  
    try {
      const newAddress = await Address.create({
        endereco,
        bairro,
        cidade,
        cep,
        complemento,
      });
  
      response.status(201).json(newAddress, 'Endereço registrado com sucesso');
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  };
  
  export const updateAddress = async (request, response) => {
    const { id } = request.params;
    const { endereco, bairro, cidade, cep, complemento } = request.body;
  
    try {
      const address = await Address.findByPk(id);
  
      if (!address) {
        response.status(404).json({ message: "Endereço não encontrado" });
        return;
      }
  
    
      address.endereco = endereco;
      address.bairro = bairro;
      address.cidade = cidade;
      address.cep = cep;
      address.complemento = complemento
  
      await address.save();
  
      response.status(200).json(address);
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  };
  
  export const deleteAddress = async (request, response) => {
    const { id } = request.params;
  
    try {
      const address = await Address.findByPk(id);
  
      if (!address) {
        response.status(404).json({ message: "Endereço não encontrado" });
        return;
      }
  
      await address.destroy();
  
      response.status(204).json({ message: "Endereço deletado com sucesso" });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  };
    
