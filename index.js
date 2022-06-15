import express from "express";

const server = express();

const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "1/3/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/16/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" },
];

const hoje = new Date();
//const hoje = "12/25/2022";

server.get("/holidays", (req, res) => {
  res.send(holidays);
});

const index = holidays.indexOf(
  holidays.find((e) => e.date === hoje.toLocaleDateString())
);
console.log(index);

server.get("/is-today-holiday", (req, res) => {
  if (holidays[index] !== undefined) {
    res.send(`Sim, hoje é ${holidays[index].name}`);
  } else {
    res.send("Não, hoje não é feriado");
  }
});

server.listen(4000);
