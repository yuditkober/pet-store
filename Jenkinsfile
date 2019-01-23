pipeline {
    agent { label 'build'}
    stages {
        stage('build pet-store') {
            steps {
             script {
               sh 'docker-compose build'
            }
           }
        }
        stage ('test front') {
            steps {
            script {
                  sh 'cat ./storefront/node_modules/@angular/cli/bin/ng'
                  }
            }
        }


     }
}