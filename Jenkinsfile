pipeline {
    agent any
    environment {
        NEXTJS_CONTAINER = 'jswebsite_job_nextjs_1'  // Correct container name for your Next.js container
        DOCKER_HOST = 'tcp://103.173.112.12:8081'  // Docker host configuration
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/mloges-h/sixthstar.in.git'
            }
        }
        stage('Stop and Remove Containers') {
            steps {
                sh 'docker-compose down || true'  // Stop any existing containers
            }
        }
        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'  // Build the Docker images
            }
        }
        stage('Deploy Containers') {
            steps {
                sh 'docker-compose up -d'  // Deploy the containers in detached mode
            }
        }
        stage('Verify Next.js Container') {
            steps {
                sh 'docker ps'  // Verify that containers are running
            }
        }
        stage('Copy GitHub Code to Next.js Container') {
            steps {
                // Copy the contents of the public_html directory from GitHub to the correct container
                sh "docker cp ./ ${NEXTJS_CONTAINER}:/usr/src/app"  // Update path if needed
            }
        }
        stage('Test') {
            steps {
                // Define any tests or health checks for the deployment
                sh 'curl -f http://103.173.112.12:8081 || exit 1'  // Health check on Next.js app (port 8082)
            }
        }
    }
}
