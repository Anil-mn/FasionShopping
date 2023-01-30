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
        // stage('Build project') {
        //     steps {
        //         sh 'npm run build'
        //     }
        // }
        // stage('Run tests') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }
       
    }
}
