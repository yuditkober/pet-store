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
                  sh 'docker-compose up pet-front /node_modules/@angular/cli/bin/ng test'
                  }
            }
        }


     }
}