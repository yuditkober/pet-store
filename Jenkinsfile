pipeline {
    agent { docker  label 'build'}
    stages {
        stage('build pet-store') {
            steps {
             script {
             sh 'docker-compose up'
               sh "echo '**************************'"
            }
           }
        }
     }
}




