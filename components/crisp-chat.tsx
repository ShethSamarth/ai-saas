"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5fa97738-0d9a-42a7-8c2c-f8717d49ee4c")
  }, [])

  return null
}
