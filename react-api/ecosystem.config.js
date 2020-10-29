module.exports = {
  apps : [{
    name: "react-api",
    script: "src/app.js",
    args: "",
    instances: 4,
    autorestart: true,
    watch: false,
    max_memory_restart: "1G"
  }]
}