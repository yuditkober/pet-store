pipeline {
    agent { label 'build'}
    stages {
        stage('build pet-store') {
        agent {
            dockerfile {
                filename 'Dockerfile'
                dir 'storefront'
            }
        }
            steps {
             script {
               sh "echo '**************************'"
            }
           }
        }
     }
}