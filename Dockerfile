FROM node:20.12.2-alpine3.19 AS base


# Stage 1: Install dependencies
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src
COPY ./package.json ./yarn.lock* ./package-lock.json* ./
RUN yarn install --frozen-lockfile

# Stage 2: Copy the source code
FROM base AS dev
WORKDIR /usr/src
COPY --from=deps /usr/src/node_modules ./node_modules


# Stage 3: Rebuild the source code
FROM base AS builder
WORKDIR /usr/src
COPY --from=deps /usr/src/node_modules ./node_modules
COPY ./ .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp

RUN yarn build

# Stage 4: Production image, copy all the files and run next
FROM base AS prod
WORKDIR /usr/src

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built files and node modules from previous stages
COPY --from=builder /usr/src/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /usr/src/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/.next/static ./.next/static

# Set the user to run the container
USER nextjs

# Set environment variables
ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]

HEALTHCHECK --interval=5s --timeout=5s --retries=3 \
    CMD curl --fail http://localhost:3000 || exit 1
