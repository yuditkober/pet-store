pipeline {
    agent { label 'build'}
    stages {
        stage('build pet-store') {
        agent {
            dockerfile {
                filename 'Dockerfile'
                dir 'storefront'
                label 'build'
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