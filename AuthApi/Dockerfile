# Use an official Python runtime as a parent image
FROM python:3.6

# Adding backend directory to make absolute filepaths consistent across services
WORKDIR /home/walid/Bureau/RestAPI

# Install Python dependencies
COPY . /home/walid/Bureau/RestAPI
RUN pip3 install --upgrade pip -r requirements.txt


# Make port 7000 available for the app
EXPOSE 7000

# Be sure to use 0.0.0.0 for the host within the Docker container,
# otherwise the browser won't be able to find it
CMD python3 manage.py runserver 0.0.0.0:7000
