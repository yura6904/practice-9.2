import { useEffect, useState } from "react"

export const useJsonFetch = (url, opts) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
      try {
        const fetchData = async () => {
          const res = await fetch(url, opts)
          const data = await res.json()
            
          setData(data)
        }

        fetchData()

      } catch (e) {
        setError(e)

      } finally {
        setIsLoading(false)
      }

    }, [url])

    return {data, isLoading, error}
  }