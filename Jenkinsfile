pipeline {
    agent { label 'build'}
    stages {
        stage('build pet-store') {
        # agent {
            dockerfile {
                filename 'Dockerfile'
                dir 'storefront'
                #label 'build'
            }
         # }
        }
        stage('build backend') {
            agent {
                filename 'Dockerfile'
                dir 'pet-services'
                label 'build'
            }
        }
     }
}