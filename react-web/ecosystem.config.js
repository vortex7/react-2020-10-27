module.exports = {
  apps : [{
    name: "react-web",
    script: "server.js",
    args: "",
    instances: 2,
    autorestart: true,
    watch: false,
    max_memory_restart: "1G"
  }]
}