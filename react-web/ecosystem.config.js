module.exports = {
  apps : [{
    name: "react-web",
    script: "src/app.js",
    args: "",
    instances: 5,
    autorestart: true,
    watch: false,
    max_memory_restart: "1G"
  }]
}