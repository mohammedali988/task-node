const router = require("express").Router();

router.post("/user/add", (req, res) => {
  const { userName } = req.data;
  res.json(userName);
});

router.get("/user/all", (req, res) => {
  res.json({
    user: data,
  });
});
