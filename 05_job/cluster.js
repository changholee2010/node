import cluster from "cluster";
import http from "http";
import { cpus } from "os";

const numCPUs = cpus.length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end("hello, world");
  });
  console.log(`Worker ${process.pid} started.`);
}
