pipeline {
    agent { label 'slave_1'}
    stages {

        stage('build front') {
            steps {
             script {
               dir ("/storefront")
               sh 'docker build -t front'
               sh 'docker run -p 8085:8080 front'
             }
            }    
        }

     }
}