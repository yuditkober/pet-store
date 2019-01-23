pipeline {
    agent { label 'build'}
    stages {
        stage('build pet-store') {
            script {
                       sh "echo '**************************'"
                       sh "docker-compose build"
                    }

        }
     }
}