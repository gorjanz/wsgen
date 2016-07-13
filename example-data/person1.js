module.exports = {
  "mainConfiguration": {
    // colors for the website
    // name of the bot assistant
    // url to the main person image
    // url to the bot image
  },
  "contactConfiguration": {
    "email": "mailto:<personal-email>",
    "twitter": "https://twitter.com/<twitter-handle>",
    "facebook": "https://facebook.com/<facebook-name>",
    "medium": "https://medium.com/<medium-username>",
    "linkedin": "<linkedIn-url>",
    "github": "https://github.com/<github-handle>"
    // gradually add support for slideshare, speakerdeck etc...
  },
  "sections": [
    {
      "title": "Introduction",
      "iconId": "some icon id for an icon from an iconfont such as font awesome",
      "conversationParts": [
        {
          "type": "question",
          "text": "..."
        },
        {
          "type": "answer",
          "text": "..."
        },
        // ...
        {
          "type": "statement",
          "text": "something which contains a link to the next section"
        }
      ]
    },
    {
      "title": "Work Experience",
      "iconId": "some icon id for an icon from an iconfont such as font awesome",
      "conversationParts": [
        {
          "type": "question",
          "text": "..."
        },
        {
          "type": "answer",
          "text": "..."
        }
      ]
    },
    {
      "title": "Past Projects",
      "iconId": "some icon id for an icon from an iconfont such as font awesome",
      "conversationParts": [
        {
          "type": "question",
          "text": "..."
        },
        {
          "type": "answer",
          "text": "..."
        },
        {
          "type": "image",
          "url": "url to some image"
        },
        {
          "type": "question",
          "text": "..."
        },
        {
          "type": "answer",
          "text": "..."
        },
        {
          "type": "video",
          "url": "url for an embedded youtube video"
        }
      ]
    },
    {
      "title": "Contact",
      "iconId": "some icon id for an icon from an iconfont such as font awesome",
      "conversationParts": [
        {
          "type": "statement",
          "text": "..."
        },
        {
          "type": "contact",
          "text": "...",
          "url": "...",
          "iconId": "..."
        },
        {
          "type": "contact",
          "text": "...",
          "url": "...",
          "iconId": "..."
        },
        {
          "type": "contact",
          "text": "...",
          "url": "...",
          "iconId": "..."
        },
        // ...
        {
          "type": "file",
          "url": "download url of the file"
        }
      ]
    }
  ]
}