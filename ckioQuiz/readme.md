to build this project:
cd ~/Github/ckioProjects/ckioQuiz/
docker build -t kepsteruk/maths-quiz-app .

to run the container:
docker run -d --rm --name quizApp -p 8095:80 kepsteruk/maths-quiz-app:latest

to push to hub:
docker push kepsteruk/maths-quiz-app:latest