pipeline {
    agent { label build }
    stages {
        stage('build backend') {
            steps {
               script {
                sh './build.sh'
                dir ("pet-store-service")
                    sh 'mvn clean install'
                }
               }
            }
        }
        stage('build front') {
            steps {
             script {
                dir ("pet-store-front")
                sh 'yarn install'
                sh 'npm run build'
            }
          }    
        }   
  }
}