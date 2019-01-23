pipeline {
    agent { label 'build'
    stages {
        stage('build pet-store') {
            dockerfile {
                filename 'Dockerfile'
                dir 'storefront'
            }
        }
    }
}
}