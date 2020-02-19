import useDidUpdateEffect from "utils/useDidUpdateEffect"
import { useEffect } from "react"

function effects({
  type,
  users,
  search,
  getUsers,
  pageSize,
  pageNumber,
  totalCount,
  lastItemRef,
  getQueryParams,
}) {
  useEffect(() => {
    getQueryParams()
  }, [])

  useDidUpdateEffect(() => {
    getUsers()
  }, [search, type])

  useDidUpdateEffect(() => {
    function lazyload(entries) {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return
        observer.unobserve(target)
        const currentPage = pageNumber - 1
        if (
          !!pageNumber &&
          !!totalCount &&
          totalCount > currentPage * pageSize
        ) {
          getUsers({ pageNumber })
        }
      })
    }
    const observer = new IntersectionObserver(lazyload, {
      threshold: 0,
    })

    if (observer) observer.disconnect()
    if (lastItemRef.current) observer.observe(lastItemRef.current)

    return () => observer.disconnect()
  }, [users])
}

export default effects
