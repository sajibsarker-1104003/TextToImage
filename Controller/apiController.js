const deepai = require('deepai');

deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

exports.PostData = async (req, res) => {
  try {
    var resp = await deepai.callStandardApi("text2img", {
      text: req.body.text,
    });
    console.log(resp);
    if (resp) {
      return res.status(200).json({
        message: "Successfully Receive Data",
        result: resp
      });
    } else {
      return res.status(200).json({
        message: "Nothing found!!",

      });
    }

  } catch (err) {
    return res.status(500).json(err);
  }
}