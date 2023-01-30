// pipeline {
//     agent any
//     stages {
//         stage('Clone repository') {
//             steps {
//                 git 'https://github.com/Anil-mn/FasionShopping.git'
//             }
//         }
//         stage('Install dependencies') {
//             steps {
//                 bat 'npm install'
//             }
//         }
//         stage('Build project') {
//             steps {
//                 bat 'npm run build'
//             }
//         }
//         stage('Run tests') {
//             steps {
//                 bat 'npm test'
//             }
//         }
       
//     }
// }
// Node
pipeline {
    agent {
        label 'windows-mern'
    }
    stages {
        stage('Build Backend') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build Frontend') {
            steps {
                bat 'cd shopping && npm install'
            }
        }
        stage('Test Backend') {
            steps {
                bat 'npm test'
            }
        }
        stage('Test Frontend') {
            steps {
                bat 'cd shopping && npm test'
            }
        }
        // stage('Deploy') {
        //     steps {
        //         bat 'cd backend && npm run start:prod'
        //         bat 'cd frontend && npm run build'
        //     }
        // }
    }
}
