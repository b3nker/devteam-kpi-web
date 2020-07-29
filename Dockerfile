FROM eu.gcr.io/neo9-software-factory/n9-images/node:12.18.2 as builder

COPY ./ ./

ENV PORT 4200
ENV NODE_ENV "development"

RUN npm run build

CMD ["npm", "run", "start"]


FROM eu.gcr.io/neo9-software-factory/n9-images/node:12.18.2-runtime

COPY --from=builder /home/app/dist .

RUN npm prune --production \
  && rm -rf test \
  && find . -type f -name "*.d.ts" -exec rm {} \;

CMD ["node", "dist/index.js"]
