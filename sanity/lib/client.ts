import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skUCTDwzsxde5ApHBbq4HLIakbnyGJTHjFQdhnGKzLo7N3qr0kGPO9PNLU7BKxlAIiJi2OoIQlkuyyxlTyLqOkmHQU4Vi1pLerJY1XDWcQeEAvO77jkqGRtj1JbozQZCKPcllakWmwhUFrdCyckr4GgSA4RVsnMxyPvhojZvmUC23UcEJE3D",
})
