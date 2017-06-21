import { createSelector } from 'reselect'

const getSearchFilter = state => state.posts.filters.search.trim()
const getPostItems = state => state.posts.items
const getChosenFieldsFilter = state => state.posts.filters.fieldsChosen

export const getFilteredPosts = createSelector(
  [getSearchFilter, getChosenFieldsFilter, getPostItems],
  (search, chosen, items) => {
    // Create case insensitive regex from search string OR leave undefined if empty
    let regex = search.length > 0 ? new RegExp(search, 'i') : undefined

    // Use a single filter loop on items for all filters to optimize
    items = items.filter(item => {
      // Filter by search string
      if (regex) {
        let str = `${item.network} ${item.text} ${item.author}`
        if (item.tags) {
          str +=  ` ${item.tags.join(' ')}`
        }
        // No match on search? Reject post
        if (!regex.test(str)) return false
      }

      // Filter by chosen fields
      for (let field of Object.keys(chosen)) {
        const chosenVals = chosen[field]

        // Continue if no filters on this field
        if (chosenVals.length === 0) continue
        const itemVal = item[field]

        // Trying to filter on a field that item doesn't have? Reject post
        if (itemVal === undefined) return false

        // Tags field is an array
        if (Array.isArray(itemVal)) {
          let hasTagMatch = false
          for (let subVal of itemVal) {
            // Any tag matches are valid
            hasTagMatch = hasTagMatch || chosenVals.includes(subVal)
          }
          if (!hasTagMatch) return false
        } else {
          // Regular string fields. Reject if not found
          if (!chosenVals.includes(itemVal)) return false
        }
      }
      // Match!
      return true
    })
    return items
  }
)
