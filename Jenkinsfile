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
                sh 'dir storefront'
                sh 'npm run test'
            }
        }


     }
}