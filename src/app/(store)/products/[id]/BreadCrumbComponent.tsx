'use client'
import { useEffect, useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const BreadCrumbComponent = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // Set the flag to true once the component is mounted on the client
  }, [])

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        
        {/* Conditionally render BreadcrumbSeparator only on client */}
        {isClient && <BreadcrumbSeparator />}
        
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Shop</BreadcrumbLink>
        </BreadcrumbItem>

        {isClient && <BreadcrumbSeparator />}

        <BreadcrumbItem>
          <BreadcrumbLink href="/products/12">Men</BreadcrumbLink>
        </BreadcrumbItem>

        {isClient && <BreadcrumbSeparator />}

        <BreadcrumbItem>
          <BreadcrumbLink href="/products/12">T - SHIRT</BreadcrumbLink>
        </BreadcrumbItem>

        {isClient && <BreadcrumbSeparator />}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumbComponent
