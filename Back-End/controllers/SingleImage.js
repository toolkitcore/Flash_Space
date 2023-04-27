const path = require("path");

const SingleImageController = {
  SingleImage: async (req, res) => {
    try {
      const link = await path.join(
        __dirname,
        "../uploads",
        req.params.filename
      );
      console.log(link);
      res.status(200).sendFile(link);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = SingleImageController;
