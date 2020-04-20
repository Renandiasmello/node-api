const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        // O .query pega os parametros passados via get
        const { page = 1 } = req.query;
        // estou deixando apenas page, ao inves de page: page, para simplificar
        const products = await Product.paginate({}, {page, limit: 7});

        return res.json(products);
    },
    async store(req, res){
        const product = await Product.create(req.body);
        
        return res.json(product);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true});

        return res.json(product);
    },
    async delete(req, res){
        await Product.findByIdAndDelete(req.params.id);

        return res.send("success");
    }
}