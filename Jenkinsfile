pipeline {
    agent { label 'build'}
    stages {
        stage('build pet-store') {
            agent { docker }
            steps {
             script {
             sh 'docker-compose up'
               sh "echo '**************************'"
            }
           }
        }
     }
}




