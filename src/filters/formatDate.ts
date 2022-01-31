var formatDate = function(date: Date) {
  let monthValue = date.toLocaleString("default", { month: "long" });
  let dayValue = date.toLocaleString("default", { weekday: "long" });
  return dayValue + " " + date.getDate() + " " + monthValue + " " + date.getFullYear();
};

export default formatDate;
