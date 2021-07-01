let d = new Date();
let today = d.toISOString().substring(0, 10);
let pre = d.setDate(d.getDate() - 1);
let yesterday = new Date(pre).toISOString().substring(0, 10)

export { today as end_date, yesterday as start_date };