#install node
 sudo apt-get install nodejs npm

# install @angular/cli
 sudo npm install -g @angular/cli

#install maven
 sudo apt-get update -y
 sudo apt-get upgrade -y
 sudo add-apt-repository ppa:webupd8team/java
 sudo apt-get update -y
 sudo apt-get install oracle-java8-installer
 cd /opt/
 wget http://www-eu.apache.org/dist/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz
 sudo tar -xvzf apache-maven-3.3.9-bin.tar.gz
 sudo mv apache-maven-3.3.9 maven 
