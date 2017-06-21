const initialState = {
  posts: {
    filters: {
      search: '',
      fieldsChoices: {
        network: ['fb', 'tw', 'ig'],
        author: ['@tint', '@tln'],
        tags: ['foo', 'bar']
      },
      fieldsChosen: {
        network: [],
        author: [],
        tags: []
      },
    },
    items: [
      {
        "id": 1,
        "network": "fb",
        "text": "Ziggy played guitar, jamming good with Weird and Gilly",
        "author": "@tint",
        "tags":[
            "foo",
            "bar"
        ]
      },
      {
        "id": 2,
        "network": "fb",
        "text": "And the spiders from Mars. He played it left hand",
        "author": "@tln",
        "tags":[
            "bar"
        ]
      },
      {
        "id": 3,
        "network": "tw",
        "text": "But made it too far",
        "author": "@tint",
        "tags":[
            "foo"
        ]
      },
      {
        "id": 4,
        "network": "tw",
        "text": "Became the special man, then we were Ziggy's band",
        "author": "@tln"
      },
      {
        "id": 5,
        "network": "ig",
        "text": "Ziggy played guitar",
        "author": "@tint",
        "tags":[
            "foo",
            "bar"
        ]
      }
    ]
  }
}
export default initialState
