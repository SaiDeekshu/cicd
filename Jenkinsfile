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
                bat 'docker build -t cicd .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop cicd-container || exit 0'
                bat 'docker rm cicd-container || exit 0'
            }
        }

        stage('Run New Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name cicd-container cicd'
            }
        }
    }
}