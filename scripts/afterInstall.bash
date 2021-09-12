docker login -u we2dinc -p 7a129db5-f2d4-4572-825c-629714f62a60
docker pull we2dinc/react-docker:main
docker run -d -it -p 80:80 --name react-docker we2dinc/react-docker:main

