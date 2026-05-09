```groovy id="p4m7x2"
pipeline {

    agent any

    stages {

        stage('Clone Repository') {

            steps {

                git 'https://github.com/SaiDeekshu/cicd.git'
            }
        }

        stage('Build Docker Image') {

            steps {

                sh 'docker build -t cicd .'
            }
        }

        stage('Stop Old Container') {

            steps {

                sh 'docker stop cicd-container || true'
                sh 'docker rm cicd-container || true'
            }
        }

        stage('Run New Container') {

            steps {

                sh 'docker run -d -p 3000:3000 --name cicd-container cicd'
            }
        }
    }

    post {

        success {

            echo 'Pipeline executed successfully'
        }

        failure {

            echo 'Pipeline failed'
        }

        always {

            echo 'Pipeline execution completed'
        }
    }
}
```
