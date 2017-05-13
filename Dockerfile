FROM node:6
LABEL maintainer="dkelmanson@askjack.com"

RUN rm /bin/sh && ln -s /bin/bash /bin/sh &&\
    useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app
USER app

RUN mkdir -p $HOME/admin
WORKDIR $HOME/admin

COPY package.json $HOME/admin/
RUN yarnpkg build

EXPOSE 3001
