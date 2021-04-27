module.exports.getDate = function() {

const today = new Date()
    const options = {
        weekday: "long",
        day:    "numeric",
        month:  "long"
    }

   return today.toLocaleDateString("pt-BR", options)
} /* Estou exportando a função getDate(), não há necessidade de () */

module.exports.getDay = function () {

const today = new Date()
    const options = {
        weekday: "long"
    }

    return today.toLocaleDateString("pt-BR", options)
}  /* Exportando a função getDay() */