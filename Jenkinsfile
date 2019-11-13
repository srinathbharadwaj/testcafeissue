pipeline {

    agent any
    
    stages {
        stage('Install') {          
            agent {
                docker {
                    image 'node:10.11'
                    reuseNode true
                }
            }
            environment {
                HOME = '.'
            }

            steps {
                sh 'npm config set unsafe-perm true'                
                sh 'npm install testcafe-reporter-html'
                sh 'npm install testcafe-reporter-junit'
            }           
        }
        stage('Test'){
            agent { 
                docker {
                        image 'testcafe/testcafe'
                        args '-e NODE_PATH=./node_modules'
                        args '--entrypoint=\'\''
                        reuseNode true
                } 
            }

            steps{
                sh "node_modules/.bin/testcafe 'chromium:headless --no-sandbox --disable-dev-shm-usage' ./tests/test.js -s -r html:results.html,junit:report.xml"
            }
        }       
    }
    post {
        always {
            echo 'Use this stage to do post run activities'
            //deleteDir() /* clean up our workspace */
        }
    }
}
