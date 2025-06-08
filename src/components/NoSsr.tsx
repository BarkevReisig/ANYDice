"use client"
import dynamic from 'next/dynamic'
import React from 'react'

/*
 * For disabling SSR in components that are wrapped in the NoSSR component. 
 * Surround component that should only render on client with this component.
 */

const NoSsr = (props: unkown) => (
  <React.Fragment>{props.children}</React.Fragment>
)

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})
