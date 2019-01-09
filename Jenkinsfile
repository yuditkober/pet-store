pipeline {
    agent node
    stages {
        stage('build images of front and backend') {
            steps {
                sh "docker-compose down"
                sh "docker-compose build"
                sh "docker-compose up -d"
            }
        }
    }
}