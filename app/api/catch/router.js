import Airtable from "airtable";

const base = new Airtable({apiKey: "keykr8vsePuSxilWM"}).base("appar2QAK2EBHEzwj");
const table = base("Catches");

let catchList = [];

table.select({
  view: 'Grid view'
}).firstPage(function(err, records) {
  if (err) { console.error(err); return; }
  records.forEach(function(record) {
    catchList.push({id:record.id, ...record.fields});
  });
});

export { catchList };