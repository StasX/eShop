async function connect() {
    try {
        await mongoose.connect(
            "mongodb://db:27017/eshop", {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }
        );
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    connect
};
