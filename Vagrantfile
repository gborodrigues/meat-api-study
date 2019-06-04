Vagrant.configure("2") do |config|
  config.vm.box = "kwilczynski/ubuntu-16.04-docker"
  config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.provision "file", source: "../mutant-challenge", destination: "/tmp/"
  config.vm.provision "shell", path: "run.sh"
end
