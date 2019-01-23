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
              dir (path: './storefront/node_modules/@angular/cli/bin/') {
              sh 'ng test'
              }
            }
        }


     }
}