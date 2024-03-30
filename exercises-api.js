import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "application/json; charset=utf-8");

  if (req.url === "/") {
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end("API DE EJERCICIOS");
  } else if (req.url === "/chest") {
    const chestExercices = ["Push-ups", "Dip", "Chest-Press"];
    res.end(JSON.stringify(chestExercices));
  } else if (req.url === "/leg") {
    const legExercices = ["Squats", "Leg-Press", "Calf-Raises"];
    res.end(JSON.stringify(legExercices));
  } else if (req.url === "/back") {
    const backExercices = ["Pull-ups", "Lat-Pulldown", "Cable-Curl"];
    res.end(JSON.stringify(backExercices));
  } else {
    res.statusCode = 404;
    res.end("404");
  }
});
server.listen(1234, () => {
  console.log("server listening on port http://localhost:1234");
});
