/* Copyright (c) 2022 Astraea, Inc. All Rights Reserved. */

import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import React from 'react'
import {
  createRoutesFromChildren,
  matchRoutes,
  Routes,
  useLocation,
  useNavigationType,
} from 'react-router-dom'

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN,
  environment: 'local',
  debug: true,
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      ),
    }),
  ],

  tracesSampleRate: 1.0,
})

export const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes)
