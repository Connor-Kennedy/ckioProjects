to build this project:
cd ~/Github/ckioProjects/ckioBlazorServerSideTemplate/
docker build -t kepsteruk/blazor-server-side-template .

to run the container:
docker run -d --rm --name ckioBlazorServerSideTemplate -p 8093:80 kepsteruk/blazor-server-side-template:latest

to push to hub:
docker push kepsteruk/blazor-server-side-template:latest