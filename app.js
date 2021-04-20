const express = require("express")
const app = express()
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

    let today = new Date()
    let options = {
        weekday: "long",
        day:    "numeric",
        month:  "long"
    }

    let day = today.toLocaleDateString("pt-BR", options)

    /* new Date() pega o dia atual que é um número,
         getDay é um array que devolve um array número, que cada numero representa um dia. */
   res.render("list", {kindOfDay: day,
                       newListItems: items})
})

app.post("/", (req, res) => {
  let item = req.body.newItem
  items.push(item)
   console.log(item)
   res.redirect("/")
})