export default {
  name: "arbeidslogg",
  title: "Arbeidslogg",
  type: "document",
  fields: [
    {
      name: "date",
      title: "Dato",
      type: "date",
    },
    {
      name: "name",
      title: "Navn",
      type: "string",
    },
    {
      name: "task",
      title: "Oppgave",
      type: "string",
    },
    {
      name: "time",
      title: "Timer",
      type: "string",
    },
  ],
};