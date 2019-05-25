FROM node:10.15.3-alpine
RUN npm install -g @angular/cli 
## rxjs-tslint tslint typescript
## RUN cd /usr/local/lib/node_modules/rxjs-tslint && npm install
USER $USER
WORKDIR /app
#correr dentro del shell del contenedor
# rxjs-5-to-6-migrate -p src/tsconfig.app.json && npm uninstall