pipeline {
    agent any
    stages {
        stage('Clone repository') {
            steps {
                git 'https://github.com/Anil-mn/FasionShopping.git'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build project') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Run tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                // Deployment steps, e.g.
                // sh 'npm run deploy'
                // or
                // withCredentials([usernamePassword(credentialsId: 'your-credentials-id', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                //     sh "curl -u $USERNAME:$PASSWORD -X POST https://your-deployment-url"
                // }
            }
        }
    }
}
