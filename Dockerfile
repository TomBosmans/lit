FROM oven/bun:latest
WORKDIR /app
EXPOSE 3000
EXPOSE 5555
RUN bun upgrade
CMD ["bun", "run", "start:watch"]
