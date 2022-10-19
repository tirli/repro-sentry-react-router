/* Copyright (c) 2021-2022 Astraea, Inc. All Rights Reserved. */

import React from 'react'
import { Route, useParams, Outlet } from 'react-router'
import { Navigate } from 'react-router-dom'
import { SentryRoutes } from './sentry'

function Dashboard() {
  return <h1>Dashboard</h1>
}

function Project({ id, siteId }: { id: string; siteId?: string }) {
  return <div>{siteId ? `Site ${siteId} page` : `Project ${id} page`}</div>
}

const ProjectWithParams = () => {
  const { id, siteId } = useParams<'id' | 'siteId'>()

  return <Project id={id!} siteId={siteId} />
}

const ProjectOutlet = () => {
  const { id, siteId } = useParams<'id' | 'siteId'>()

  return (
    <>
      <div>
        <h2>
          Project page header. id: {id} siteId: {siteId}
        </h2>
        <button onClick={() => nonExistentFn()}>Click to error</button>
      </div>
      <Outlet />
    </>
  )
}

export function Monitor() {
  return (
    <SentryRoutes>
      <Route path="projects" element={<Outlet />}>
        <Route index element={<Dashboard />} />

        <Route path=":id" element={<ProjectOutlet />}>
          <Route index element={<ProjectWithParams />} />
          <Route path=":siteId" element={<ProjectWithParams />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate replace to="projects" />} />
    </SentryRoutes>
  )
}
