const express = require("express")
const app = express()
const date = require(__dirname + "/date.js")
const port = 3000
let items = ["Buy Food", "Cook Food", "Eat food"]

app.use(express.urlencoded({
    extended: true
  }));
app.use(express.static("public"))

app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})

app.get("/", (req, res) => {

  let day = date.getDate() // Mudar essa função para getDate ou getDay para alterar a funcionalidade

  res.render("list", {listTitle: day,
                       newListItems: items})
})

app.post("/", (req, res) => {
  let item = req.body.newItem
  items.push(item)
   console.log(item)
   res.redirect("/")
})