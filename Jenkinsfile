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
     }
}